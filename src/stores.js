import { writable } from 'svelte/store';

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, exercitationem explicabo necessitatibus beatae eum quibusdam soluta debitis velit? Praesentium eos, nobis quibusdam expedita minus commodi facilis, ratione ex placeat animi repellat numquam earum quo voluptatum, ipsa quisquam officiis excepturi optio at cum itaque sit tempora sed sunt! Quas aspernatur quibusdam .",
    },
    {
        id: 2,
        rating: 8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, exercitationem explicabo necessitatibus beatae eum quibusdam soluta debitis velit? Praesentium eos, nobis quibusdam expedita minus commodi facilis, ratione ex placeat animi .",
    },
    {
        id: 3,
        rating: 2,
        text: "Sometimes its good, Sometimes its SHEEET",
    },
])