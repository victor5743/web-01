<template>
    <div class="w-full fixed shadow bg-white">
        <div class="bg-blue h-4"></div>
        <nav class="py-2">
            <!-- Navbar options - Medium Desktop -->
            <div class="flex justify-between items-center ">
                <!-- Logo -->
                <a
                    class="flex items-center font-raleway font-medium font-semibold text-2xl ml-6"
                    href="/"
                >
                    <img
                        class="h-10 w-10"
                        src="../../img/logo.png"
                        alt="Logo"
                    />
                    Web page
                </a>

                <!-- Navbar options -->
                <div class="hidden sm:block">
                    <ul
                        class="flex uppercase tracking-wide font-bold items-center"
                    >
                        <li class="mr-2 my-2 pr-3 rounded-md ml-4">
                            <a href="about">Who I am</a>
                        </li>
                        <li class="mr-2 my-2 pr-3 rounded-md ml-4">
                            <a href="portfolio">Portfolio</a>
                        </li>
                        <li class="mr-2 my-2 pr-3 rounded-md ml-4">
                            <a href="contact">Contact</a>
                        </li>
                    </ul>
                </div>

                <!-- SVG Navbar -->
                <svg
                    @click="isOpen = !isOpen"
                    class="h-6 w-6 sm:hidden mr-6 text-gray-800 fill-current cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </div>

            <!-- Navbar options - Mobile -->
            <div>
                <ul
                    v-if="isOpen"
                    class="uppercase tracking-wide font-bold items-center text-right"
                >
                    <li class="mr-2 my-2 pr-3 rounded-md ml-4">
                        <a href="#">Who I am</a>
                    </li>
                    <li class="mr-2 my-2 pr-3 rounded-md ml-4">
                        <a href="#">Portfolio</a>
                    </li>
                    <li class="mr-2 my-2 pr-3 rounded-md ml-4">
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        };
    }
};
</script>
