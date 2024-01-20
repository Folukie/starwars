import validator from 'validator'

export const formatDate = (date, locale = 'en-GB') => {
  return new Date(date).toLocaleString(locale)
}

export const formatBirthYear = (year) => {
  const bbyYear = parseInt(year, 10)
  const currentYear = new Date().getFullYear()
  const standardYear = currentYear - Math.abs(bbyYear)
  return standardYear.toString()
}

export const validateEmail = (email) => {
  return validator.isEmail(email)
}
export const validatePassword = (password) => {
  if (password.length < 6) {
    return false
  }

  const hasLetters = /[a-zA-Z]/.test(password)
  const hasNumbers = /\d/.test(password)

  return hasLetters && hasNumbers
}
