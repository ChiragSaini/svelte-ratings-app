<script>
    // import { onMount, onDestroy } from 'svelte';
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";
    import { FeedbackStore } from "../stores";
    // let feedbacks = [];
    
    // const unsubscribe = FeedbackStore.subscribe((data) => feedbacks = data);

    // onMount(() => {
    //     console.log('Mounted')
    // })

    // onDestroy(() => unsubscribe())

</script>

{#each $FeedbackStore as feedback (feedback.id)}
    <div in:scale out:fade={{ duration: 500 }}>
        <FeedbackItem {feedback} />
    </div>
{/each}
