<template>
  <div
    class="flex flex-col lg:flex-row-reverse w-full lg:h-screen px-4 lg:px-0 bg-[#F2F2F7]"
  >
    <div class="flex items-center justify-center my-5 lg:hidden ">
      <img src="/icons/Logo.png" alt="" class="text-primary text-center text-2xl  font-extrabold " />
    </div>
    <div class="lg:flex-1 ">
      <div class="flex flex-col mx-auto lg:px-[70px] lg:pt-[241px] lg:pb-10">
        <div
          class="border-2 bg-white border-my_border rounded-md border-solid my-5"
        >
          <div
            class="flex p-5 justify-between border-b-2 border-my_border rounded-md border-solid"
          >
            <h1 class="text-primary text-[22px] font-bold">Premium Plan</h1>
            <span class="text-primary text-[22px] font-bold">$ 50 / mo</span>
          </div>
          <div class="flex flex-col m-[20px] gap-3">
            <div class="flex space-x-2">
              <img
                src="/icons/check_FILL.svg"
                alt=""
                class="h-[22px] w-[22px]"
              />
              <p class="text-base text-primary font-medium">
                Basic profile display on website
              </p>
            </div>
            <div class="flex space-x-2">
              <img
                src="/icons/check_FILL.svg"
                alt=""
                class="h-[22px] w-[22px]"
              />
              <p class="text-base text-primary font-medium">
                Appear in search results
              </p>
            </div>
            <div class="flex space-x-2">
              <img
                src="/icons/check_FILL.svg"
                alt=""
                class="h-[22px] w-[22px]"
              />
              <p class="text-base text-primary font-medium">
                Featured in main chat box
              </p>
            </div>
            <div class="flex space-x-2">
              <img
                src="/icons/check_FILL.svg"
                alt=""
                class="h-[22px] w-[22px]"
              />
              <p class="text-base text-primary font-medium">
                Featured in newsletter
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex lg:w-2/3">
      <div class="lg:w-72 flex-shrink-0 bg-primary hidden lg:block">
        <div class="flex flex-col p-6 justify-between h-screen">
      <div>
            <div class="flex border-b border-[#242424]">
        <p class="mb-2 text-[11px] font-medium text-white">lawyer profile</p>
      </div>
      <div class="flex items-center justify-center py-10">
        <div class="flex h-[100px] w-[100px] flex-col items-center rounded-[164.583px] border-[0.823px] border-dashed border-[#09D3FF] px-[14.813px] py-[37.031px]">
          <img src="/icons/CameraPlus.svg" alt="" class="h-[26.333px] w-[26.333px]" />
        </div>
      </div>
      <div class="flex flex-col">
        <input type="text" class="bg-primary mb-4 w-full rounded-md border border-solid border-[#242424] px-5 py-3 text-[#737272]" placeholder="Full Name" />
        <input type="text" class="bg-primary mb-4 w-full rounded-md border border-solid border-[#242424] px-5 py-3 text-[#737272]" placeholder="Law Firm" />
        <select class="bg-primary mb-4 w-full rounded-md border border-solid border-[#242424] px-5 py-3 text-[#737272]">
          <option value="Select an area of law">Select an area of law</option>
          <option value="Criminal Law">Criminal Law</option>
          <option value="Family Law">Family Law</option>
          <option value="Immigration Law">Immigration Law</option>
        </select>
        <input type="email" class="bg-primary mb-4 w-full rounded-md border border-solid border-[#242424] px-5 py-3 text-[#737272]" placeholder="Email Address" />
      </div>
      </div>

      <div class="flex items-center space-x-2 bg-[#202020] p-2 ">
        <div>
          <img src="/icons/Arrow-Up.svg" alt="" class="h-[17px] w-[17px]" />
        </div>
        <div>
          <span class="text-base text-[#358DF4]">Upgrade to Premium</span>
        </div>
      </div>
    </div>
      </div>
      <div class="lg:flex-1 w-full lg:bg-[#F2F2F7] lg:p-[70px]">
        <div class="flex flex-col gap-8 lg:my-[86px]">
          <div class="flex flex-col gap-5">
            <div
              class="flex- text-primary text-[28px] font-semibold lg:mb-[45px] hidden lg:block"
            >
              <h1>Checkout</h1>
            </div>
            <div class="flex flex-col items-start bg-white">
              <div class="flex px-5 py-3 space-x-2">
                <div
                  class="flex w-9 h-9 justify-center items-start gap-[13.474px] border border-secondary pt-[5.895px] rounded-full border-solid"
                >
                  <img
                    src="/icons/Profile.svg"
                    alt=""
                    class="w-[29px] h-[29px]"
                  />
                </div>
                <div class="flex flex-col">
                  <span class="text-[#7A7878] text-base">Account</span>
                  <span class="text-[#191919] text-base font-medium"
                    >yaakoub.elhbari@gmail.com</span
                  >
                </div>
              </div>
            </div>
            <!-- input form -->
            <div class="">
              <span class="text-[#7A7878] text-[11px] font-medium uppercase"
                >card number</span
              >
              <div class="flex items-center pr-5 bg-white">
                <input
                  type="text"
                  placeholder="Card Number"
                  class="pl-4 pr-6 py-4 w-3/4"
                />
                <div class="flex space-x-2">
                  <img src="/icons/visa.svg" alt="" class="w-[25px] h-[17px]" />
                  <img src="/icons/g13.svg" alt="" class="w-[25px] h-[17px]" />
                  <img
                    src="/icons/Group7.svg"
                    alt=""
                    class="w-[25px] h-[17px]"
                  />
                  <img
                    src="/icons/american-express.svg"
                    alt=""
                    class="w-[25px] h-[17px]"
                  />
                </div>
              </div>
            </div>
            <div class="container mx-auto max-w-7xl">
              <div class="flex flex-col items-center justify-center">
                <div class="w-full">
                  <div class="flex flex-row gap-4">
                    <div>
                      <span class="text-[#7A7878] text-[11px] font-medium uppercase">Expire date</span>
                      <input
                        type="text"
                        class="w-full p-2  "
                        placeholder="MM/YY"
                      />
                    </div>

                    <div>
                      <span class="text-[#7A7878] text-[11px] font-medium uppercase">CVC</span>
                      <input
                        type="text"
                        class="w-full p-2 "
                        placeholder="cvc"
                      />
                    </div>
                    <div>
                      <span class="text-[#7A7878] text-[11px] font-medium uppercase">Zip code</span>
                      <input
                        type="text"
                        class="w-full p-2"
                        placeholder="8987"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="flex w-full lg:w-[200px] md:w-[200px] h-[50px] justify-center items-center bg-secondary gap-2.5 p-3 rounded-md"
          >
            <span class="text-white font-semibold text-base">Subscribe</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
