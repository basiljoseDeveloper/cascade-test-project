export const REQUIRED = (resource, name) => (!resource?.trim() ? `*${name} ${"is required"}` : true);

export const EMAIL = (value, name) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value) ? true : `${"Invalid"} ${name}`);

export const PASSWORD = (value) => (/^(?=.*?[A-Z]).{6,}$/.test(value) ? true : `*Password must contain at least one upper case character with minimum six characters`);
