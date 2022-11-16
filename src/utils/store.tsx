import create from 'zustand'
import { persist } from 'zustand/middleware'
import { items } from 'config/startthedemo'
import { CookieDialogCategory } from './CookieDialog'

interface Item {
  active: boolean
  link: string
  linkText?: string
  name: string
  id: string
  source: string
  description: string
  leave?: boolean
}

type Store = {
  language: string
  showChatInitial: boolean
  acceptedCategories: CookieDialogCategory[]
  items: Item[]
  getLinkedItems: () => Item[]
  getCorrectItems: () => Item[]
  allCorrectItemsActivated: () => boolean
  // eslint-disable-next-line no-unused-vars
  activateItem: (itemId: string) => void
  changeLanguage: () => void
  chatInitialDisplayed: () => void
  changeAcceptedCategories: (
    // eslint-disable-next-line no-unused-vars
    categories: CookieDialogCategory[]
  ) => void
}

const useStore = create<Store>()(
  persist(
    (set, get) => ({
      language: 'de',

      showChatInitial: true,

      acceptedCategories: [],

      items: items,

      getLinkedItems: () => get().items.filter((linkItems) => linkItems.link !== ''),

      getCorrectItems: () => get().items.filter((correctItems) => correctItems.leave !== true),

      allCorrectItemsActivated: () =>
        get()
          .getCorrectItems()
          .every((item) => item.active === true),

      activateItem: (itemId) =>
        set((state) => ({
          items: state.items.map((item) => (item.id === itemId ? { ...item, active: !item.leave || true } : item)),
        })),

      changeLanguage: () =>
        set((state) => ({
          language: state.language === 'de' ? 'en' : 'de',
        })),

      chatInitialDisplayed: () =>
        set(() => ({
          showChatInitial: false,
        })),

      changeAcceptedCategories: (categories) =>
        set(() => ({
          acceptedCategories: categories,
        })),
    }),

    {
      name: 'protestory',
    }
  )
)

export default useStore
