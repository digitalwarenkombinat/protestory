import create from 'zustand'
import { persist } from 'zustand/middleware'
import { items } from 'config/startthedemo'
import { CookieDialogCategory } from '../services/CookieDialog'

export interface Item {
  active: boolean
  link: string
  linkName?: {}
  linkText?: {}
  name: {}
  id: string
  source: string
  description: {}
  leave?: boolean
  print?: {}
}

type Store = {
  language: string
  showChatInitial: boolean
  showCompletedCart: boolean
  acceptedCategories: CookieDialogCategory[]
  items: Item[]
  getLinkedItems: () => Item[]
  getCorrectItems: () => Item[]
  getActivatedCorrectItems: () => Item[]
  allCorrectItemsActivated: () => boolean
  // eslint-disable-next-line no-unused-vars
  activateItem: (itemId: string) => void
  changeLanguage: () => void
  chatInitialDisplayed: () => void
  chatCompletedDisplayed: () => void
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

      showCompletedCart: false,

      acceptedCategories: [],

      items: items,

      getLinkedItems: () => get().items.filter((linkItems) => linkItems.link !== ''),

      getCorrectItems: () => get().items.filter((correctItems) => correctItems.leave !== true),

      getActivatedCorrectItems: () =>
        get()
          .getCorrectItems()
          .filter((item) => item.active === true),

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

      chatCompletedDisplayed: () =>
        set(() => ({
          showCompletedCart: true,
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
