<template>
</template>

<script setup>
 definePageMeta ({
   middleware: ["auth"],
 });
 const user = useSupabaseUser();
 const client = useSupabaseClient();
 const router = useRouter();
 onMounted(() => {
   watchEffect(() => {
     if (!user.value) {
        navigateTo("/login");
      }
      router.push("/dashboard");
  });
});
</script>

<style></style>
