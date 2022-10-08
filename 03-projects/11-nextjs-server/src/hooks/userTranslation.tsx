import { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../providers/global'

type Translation = Record<string, string>
type Translator = Record<string, Translation>

/** Example
 * const t: Translator = {
 *  greating : {
 *      'en-us': 'hello',
 *      'pt-br': 'Olá'
 *  }
 * }
 */

export default function useTranslation<T>(translator: Translator) {
  const [book, setBook] = useState<Record<keyof T, string>>()
  const [state] = useContext(GlobalContext)

  useEffect(() => {
    const bookTranslated: any = {}

    for (let key in translator) {
      bookTranslated[key] = translator[key][state.lang]
    }

    setBook(bookTranslated)
  }, [state.lang])

  return book
}
