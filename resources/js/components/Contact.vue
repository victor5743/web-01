<template>
    <div>
        <!-- Contact section -->
        <div class="border-b border-gray-500 mx-6 md:mx-28 my-6">
            <h2 class="font-bold mb-6">Contact me:</h2>
            <p class="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, natus? Necessitatibus, magnam consectetur, aliquid
                animi saepe sit voluptatum velit eum expedita officia deleniti.
                Exercitationem laborum sit alias aperiam aliquam earum!
            </p>
        </div>

        <!-- Subscription section -->
        <div class="bg-blue-light py-6 mx-6 md:mx-28 texture">
            <!-- Text -->
            <h2 class="font-bold mb-6 text-center">Join my Newsletter</h2>
            <p class="text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, fuga sapiente corrupti doloremque, rerum sunt in
                qui fugit quos illo ipsam cumque obcaecati.
            </p>

            <!-- Input -->
            <form action="#">
                <div class="my-4 block md:flex mx-6 md:mx-28 md:justify-center">
                    <div class="flex justify-center">
                        <input
                            class="sm:flex-1 text-gray-400 px-4 py-2 rounded-md shadow-md outline-none border md:rounded-r-none focus:border-blue text-gray-800"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div class="flex justify-center">
                        <button
                            class="bg-blue hover:bg-blue-dark text-white rounded-md md:rounded-l-none px-4 py-2 focus:outline-none uppercase mt-4 md:mt-0"
                        >
                            Suscribe
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
