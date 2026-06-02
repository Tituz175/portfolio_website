export function scrollTo(id: string) {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}
