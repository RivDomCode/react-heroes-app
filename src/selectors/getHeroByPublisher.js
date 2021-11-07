import { heroes } from "../data/heroesData";

export const getHeroByPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`Publisher incorrect`)
    }

    return heroes.filter(hero => hero.publisher === publisher)
}