export const requiredValidate = (value) => (value ? undefined : 'Pakollinen tieto')
export const textLength64Validate = (s) => ((!s || s.length<=64) ? undefined : 'Kentän pituus on max. 64 merkkiä')
export const textLength255Validate = (s) => ((!s || s.length<=255) ? undefined : 'Kentän pituus on max. 255 merkkiä')
