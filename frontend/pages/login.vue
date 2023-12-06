<script setup>
const user = useSupabaseUser();
const router = useRouter();
const email = ref("");
const password = ref("");
const isSignUp = ref(false);
const errorMsg = ref(null);

const client = useSupabaseClient();

async function login() {
  try {
    const { user, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    router.push("/");
  } catch (error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() => {
      errorMsg.value = null;
    }, 3000);
    console.log("user", user);
    console.log("error", error);
  }
}


onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo("/");
    }
  });
});
</script>

<template>
  <div>
    <div
      class="flex flex-col lg:flex-row md:flex-row xl:flex-row w-full h-screen"
    >
      <div
        class="flex md:w-2/3 lg:w-2/3 xl:w-2/3 bg-primary h-1/3 md:h-screen lg:h-screen xl:h-screen"
      >
        <div class="flex flex-col justify-center items-center">
          <div class="flex space-x-4 items-center">
            <div
              class="bg-secondary h-[44px] w-[44px] lg:h-[81px] lg:w-[81px] rounded-full lg:p-4 p-2"
            >
              <img
                src="/icons/ScaleOutline.svg"
                alt=""
                class="h-[28px] w-[28px] lg:h-[50px] lg:w-[50px]"
              />
            </div>
            <div class="lg:hidden xl:hidden md:hidden block">
              <h1 class="text-main font-extrabold text-white text-center">
                <a class="text-secondary">24/7</a> Lawyer
              </h1>
            </div>
          </div>
          <div class="lg:mx-72 lg:mt-8 px-10 mt-5">
            <p class="text-gray text-base text-center">
              We are the leading AI legal platform for consumers. Find valuable
              leads with 24/7 Lawyer for your law firm or individual practice.
            </p>
          </div>
        </div>
      </div>
      <div
        class="flex w-full xl:w-1/3 lg:w-1/3 md:w-1/3 h-2/3 lg:h-screen xl:h-screen md:h-screen"
      >
        <div class="flex flex-col mx-auto justify-between my-12">
          <div
            class="text-primary rounded-md px-8 lg:px-12  w-full mt-[90px] hidden lg:block"
          >
            <h1 class="text-main font-extrabold text-center mb-4">
              <a class="text-secondary">24/7</a> Lawyer
            </h1>
            <p class="text-center">
              Enter your email address if you already have an account.
            </p>
          </div>
          <div class="flex flex-col py-8">
            <div class="mb-12 lg:hidden">
              <p class="text-center px-8 lg:px-0">
                Enter your email address if you already have an account.
              </p>
            </div>
            <form @submit.prevent="login" class="flex flex-col justify-center px-5 mb-12 lg:px-12">
              <input
                type="email"
                v-model="email"
                class="mb-4 w-full border-2 border-my_border rounded-md border-solid py-3 px-5"
                placeholder="Email Address"
              />
              <input
                type="password"
                v-model="password"
                class="mb-4 w-full border-2 border-my_border rounded-md border-solid py-3 px-5"
                placeholder="Password"
              />
              <button type="submit" class="bg-secondary py-3 px-5 rounded-md">
                <span class="text-white font-bold">Continue</span>
              </button>
            </form>
          </div>

          <div>
            <p class="text-center ">
              Already have an account?
            
              <NuxtLink to="/register" class="text-secondary underline border-b-0">Register.</NuxtLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
