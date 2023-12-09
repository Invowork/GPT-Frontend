<template>
  <div class="min-h-screen flex flex-col">
    <p>hello</p>
    <header class="bg-white shadow">
      <div
        class="flex justify-between items-center max-w-7xl mx-auto py-4 px-4"
      >
        <div>
          <h1 class="font-bold text-3xl text-gray-900">Dashboard</h1>
        </div>
        <div>
          <button
           v-if="user"
            @click="client.auth.signOut()"
            class="px-2 py-1 text-sm text-black font-medium rounded"
          >
            Log out
          </button>
        </div>
      </div>
    </header>

    <main class="flex flex-1 flex-col">
      <div>
        <p>hello: {{ user?.email }}</p>
      </div>
    </main>
  </div>
</template>

<script setup>
//  definePageMeta({
//    middleware: ["auth"],
//  });
//  const user = useSupabaseUser();
//  const client = useSupabaseClient();
//  const router = useRouter();



//  onMounted(() => {
//    watchEffect(() => {
//      if (!user.value) {
//    navigateTo("/login");
//  }
// });
// });
</script>

<style></style>
