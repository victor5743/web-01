<template>
    <!-- Projects section -->
    <div class="mx-6 md:mx-28">
        <!-- Title -->
        <h2 class="font-bold mb-6 mt-6">Here some projects I've worked on:</h2>

        <!-- List of projects -->
        <ul class="text-blue">
            <li
                v-for="item in projects"
                :key="item.id"
                class="flex mb-6 items-center"
            >
                <svg
                    class="fill-current h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 490.05 490.05"
                >
                    <path
                        d="M418.275 418.275c95.7-95.7 95.7-250.8 0-346.5s-250.8-95.7-346.5 0-95.7 250.8 0 346.5 250.9 95.7 346.5 0zm-261.1-210.7l55.1 55.1 120.7-120.6 42.7 42.7-120.6 120.6-42.8 42.7-42.7-42.7-55.1-55.1 42.7-42.7z"
                    />
                </svg>
                <a
                    href="#"
                    class="text-gray-800 ml-4 hover:underline hover:text-blue"
                >
                    {{ item.project }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    project: "Laravel Ecommerce application"
                },
                {
                    project: "Some stuff about it there. Link here."
                },
                {
                    project: "Here are some projects"
                },
                {
                    project: "Traditional resume in HTML format."
                }
            ]
        };
    }
};
</script>
