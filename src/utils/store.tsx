import create from 'zustand'
import { persist } from 'zustand/middleware'
import { items } from 'config/startthedemo'

interface Item {
  active: boolean
  link: string
  id: string
  name: string
  source: string
  description: string
  leave?: boolean
}

type Store = {
  language: string
  items: Item[]
  // eslint-disable-next-line no-unused-vars
  activateItem: (itemId: string) => void
  changeLanguage: () => void
}

const useStore = create<Store>()(
  persist(
    (set) => ({
      language: 'de',

      items: items.filter((linkItems) => linkItems.link !== ''),

      activateItem: (itemId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId
              ? { ...item, active: !item.leave || true }
              : item
          ),
        })),

      changeLanguage: () =>
        set((state) => ({
          language: state.language === 'de' ? 'en' : 'de',
        })),
    }),

    {
      name: 'protestory',
    }
  )
)

export default useStore
