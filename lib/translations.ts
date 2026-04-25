export type Locale = "bg" | "en";

export const translations = {
  "bg": {
    // Header
    title: "Cafe Cursor",
    subtitle: "Вземете безплатен кредит за Cursor IDE.",
    cta: "Регистрирайте се за секунди.",

    // Form
    nameLabel: "Име",
    namePlaceholder: "Вашето пълно име",
    emailLabel: "Имейл",
    emailPlaceholder: "Имейлът, с който се регистрирахте",
    emailHint: "Използвайте същия имейл, с който се регистрирахте в Luma",
    submitButton: "Вземи моя кредит",
    submitting: "Проверка...",

    // Footer
    footerNote: "Само регистрирани участници в събитието могат да получат кредити.",
    onePerPerson: "Един кредит на човек.",
    madeBy: "Направено от",
    author: "Alexander Gekov",
    authorTitle: "Cursor Ambassador Bulgaria",
    templateBy: "Шаблон от",
    templateAuthors: "Chris & Alex",
    templateTitle: "Cursor Ambassador Brasil",
    poweredBy: "Powered by",

    // Badge
    creditsAvailable: "налични кредита",
    noCredits: "Няма налични кредити",
    loading: "Зареждане...",
    alreadyClaimed: "участника вече получиха",
    of: "от",

    // Success
    successTitle: "Кредитът е присвоен!",
    alreadyHaveCredit: "Вече имате своя кредит!",
    congratsMessage: "Поздравления! Ето вашия кредит за Cursor:",
    registeredAs: "Регистриран като:",
    testWarning: "⚠️ Това е ТЕСТОВ кредит (невалиден за реална употреба)",
    yourCredit: "Вашият Cursor кредит",
    copyLink: "Копирай линк",
    useCredit: "Използвай кредит →",
    saveLink: "Запазете този линк, той е уникален и персонален.",

    // Errors
    notEligible: "Този имейл не е регистриран за събитието Cafe Cursor. Само одобрени участници могат да получат кредити.",
    notApproved: "Вашата регистрация за събитието все още не е одобрена. Моля, свържете се с организатора.",
    noCreditsAvailable: "Съжаляваме, в момента няма налични кредити. Моля, свържете се с организатора.",
    networkError: "Грешка при свързване. Моля, опитайте отново.",
    thinkError: "Смятате, че има грешка? Свържете се с организатора на събитието.",
    pendingApproval: "Вашата заявка чака одобрение.",
    tryAnotherEmail: "Опитайте с друг имейл",

    // Share
    shareOnX: "Сподели в X",
    shareMessage: "🚀 Току-що получих @cursor_ai кредит на Cafe Cursor! Огромно благодаря на общността за тази невероятна възможност да пробвам най-добрия AI код редактор. #CafeCursor #CursorAI #DevCommunity",

    // Email
    emailSent: "📧 Изпратихме кредита на вашия имейл!",
  },
  "en": {
    // Header
    title: "Cafe Cursor",
    subtitle: "Get your free Cursor IDE credit.",
    cta: "Register in seconds.",

    // Form
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email",
    emailPlaceholder: "The email you registered with",
    emailHint: "Use the same email you registered with on Luma",
    submitButton: "Get my credit",
    submitting: "Verifying...",

    // Footer
    footerNote: "Only registered event attendees can get credits.",
    onePerPerson: "One credit per person.",
    madeBy: "Made by",
    author: "Alexander Gekov",
    authorTitle: "Cursor Ambassador Bulgaria",
    templateBy: "Template by",
    templateAuthors: "Chris & Alex",
    templateTitle: "Cursor Ambassador Brasil",
    poweredBy: "Powered by",

    // Badge
    creditsAvailable: "credits available",
    noCredits: "No credits available",
    loading: "Loading...",
    alreadyClaimed: "attendees already claimed",
    of: "of",

    // Success
    successTitle: "Credit assigned!",
    alreadyHaveCredit: "You already have your credit!",
    congratsMessage: "Congratulations! Here's your Cursor credit:",
    registeredAs: "Registered as:",
    testWarning: "⚠️ This is a TEST credit (not valid for real use)",
    yourCredit: "Your Cursor credit",
    copyLink: "Copy link",
    useCredit: "Use credit →",
    saveLink: "Save this link, it's unique and personal.",

    // Errors
    notEligible: "This email is not registered for Cafe Cursor event. Only approved attendees can get credits.",
    notApproved: "Your event registration hasn't been approved yet. Please contact the organizer.",
    noCreditsAvailable: "Sorry, no credits are available at the moment. Please contact the organizer.",
    networkError: "Connection error. Please try again.",
    thinkError: "Think this is an error? Contact the event organizer.",
    pendingApproval: "Your request is pending approval.",
    tryAnotherEmail: "Try with another email",

    // Share
    shareOnX: "Share on X",
    shareMessage: "🚀 Just got a @cursor_ai credit at Cafe Cursor! Huge thanks to the community for this amazing opportunity to try the best AI-powered code editor. #CafeCursor #CursorAI #DevCommunity",

    // Email
    emailSent: "📧 We sent the credit to your email!",
  },
} as const;

export type TranslationKey = keyof typeof translations["bg"];

export function getTranslation(locale: Locale, key: TranslationKey): string {
  return translations[locale][key];
}
