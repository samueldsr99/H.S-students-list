type Falsy = false | null | undefined;

/**
 * Dynamically concatenates classNames and removing falsy ones
 * in case of conditions
 * @param classes List of classNames
 * @returns
 */
export const cn = (classes: (string | Falsy)[]): string =>
  classes.filter(Boolean).join(" ");
