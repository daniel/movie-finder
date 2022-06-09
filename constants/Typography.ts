import { Color } from './Colors'

const BaseStyle = {
  color: Color.white,
}

export const TextStyles = {
  h1: {
    ...BaseStyle,
    fontFamily: 'Roboto_500Medium',
    fontSize: 20,
    lineHeight: 23,
  },
  h2: {
    ...BaseStyle,
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
    lineHeight: 19,
  },
  body: {
    ...BaseStyle,
    fontFamily: 'Roboto_300Light',
    fontSize: 14,
    lineHeight: 16.41,
  },
}
