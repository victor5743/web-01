<template>
    <!-- About me section -->
    <div class="mx-6 md:mx-28 my-6">
        <h2 class="font-bold">About me:</h2>

        <!-- Image and text -->
        <div class="block md:flex items-center">
            <img
                class="w-20 h-20 rounded-full mx-auto mb-4"
                src="../../img/man.svg"
                alt="User"
            />
            <p class="md:ml-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                libero temporibus impedit quo consectetur, culpa delectus autem?
                Quaerat magnam sunt delectus incidunt, ex qui esse accusamus
                provident modi, ad suscipit
            </p>
        </div>

        <!-- Youtube video -->
        <iframe
            class="w-auto h-auto md:h-64 md:w-128 mb-6 mx-auto"
            src="https://www.youtube.com/embed/uHo6o1TNQeE"
            SameSite="None"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
    </div>
</template>
