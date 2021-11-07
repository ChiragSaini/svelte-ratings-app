<script>
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from './components/FeedbackStats.svelte';
	import FeedbackForm from './components/FeedbackForm.svelte'

	// const addNewFeedback = (e) => {
	// 	feedbacks = [e.detail, ...feedbacks];
	// }

	// const deleteFeedback = (e) => {
	// 	const itemId = e.detail;
	// 	feedbacks = feedbacks.filter((f) => f.id !== itemId);
	// };
</script>

<main class="container">
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
</main>

<style>
</style>
