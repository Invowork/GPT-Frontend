<template>
  <div
    class="flex flex-col lg:flex-row-reverse w-full lg:h-screen px-4 lg:px-0 bg-[#F2F2F7]"
  >
    <div class="flex lg:w-1/3 w-full">
      <div class="flex flex-col mx-auto lg:px-[70px] lg:pt-[241px] pb-10">
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

    <div class="flex lg:w-2/3 ">
      <div class="lg:w-72 flex-shrink-0 bg-primary hidden lg:block">
        <div class="flex flex-col p-6">
          <div class="flex border-b border-[#242424]">
            <p class="text-[11px] mb-2 font-medium text-white">
              lawyer profile
            </p>
          </div>
          <div class="flex justify-center items-center py-10">
            <div
              class="flex flex-col w-[100px] h-[100px] items-center px-[14.813px] py-[37.031px] rounded-[164.583px] border-[0.823px] border-dashed border-[#09D3FF]"
            >
              <img
                src="/icons/CameraPlus.svg"
                alt=""
                class="w-[26.333px] h-[26.333px]"
              />
            </div>
          </div>
          <div class="flex flex-col">
            <input
              type="text"
              class="mb-4 w-full border text-[#737272] bg-primary border-[#242424] rounded-md border-solid py-3 px-5"
              placeholder="Full Name"
            />
            <input
              type="text"
              class="mb-4 w-full bg-primary border text-[#737272] border-[#242424] rounded-md border-solid py-3 px-5"
              placeholder="Law Firm"
            />
            <select
              class="mb-4 w-full text-[#737272] bg-primary border border-[#242424] rounded-md border-solid py-3 px-5"
            >
              <option value="Select an area of law">
                Select an area of law
              </option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Family Law">Family Law</option>
              <option value="Immigration Law">Immigration Law</option>
            </select>
            <input
              type="email"
              class="mb-4 w-full text-[#737272] bg-primary border border-[#242424] rounded-md border-solid py-3 px-5"
              placeholder="Email Address"
            />
          </div>

          <div class="flex space-x-2 items-center lg:mt-80 bg-[#202020] p-2">
            <div>
              <img src="/icons/Arrow-Up.svg" alt="" class="w-[17px] h-[17px]" />
            </div>
            <div>
              <span class="text-[#358DF4] text-base">Upgrade to Premium</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex-1 w-full lg:bg-[#F2F2F7]">
        <div class="flex flex-col gap-8 lg:p-[70px]">
          <div class="flex flex-col gap-5">
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
            <div>
              <span class="text-[#7A7878] text-base uppercase"
                >card number</span
              >
              <div class="flex items-center pr-5 bg-white">
                <input
                  type="text"
                  placeholder="Card Number"
                  class="pl-4 pr-6 py-6 w-3/4"
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
            <!-- input field -->
            <div class="flex flex-row w-full items-start">
              <div class="w-1/3 flex flex-col pr-2">
                <span>Expire date</span>
                <input
                  type="text"
                  placeholder="expiredate"
                  class="pl-4 pr-6 py-4"
                />
              </div>
              <div class="w-1/3 flex flex-col px-2">
                <span>CVC</span>
                <input type="text" placeholder="CVC" class="pl-4 pr-6 py-4" />
              </div>
              <div class="w-1/3 flex flex-col pl-2">
                <span>Zip Code</span>
                <input type="text" placeholder="8765" class="pl-4 pr-6 py-4" />
              </div>
            </div>

            <div class="flex items-center">
              <div class="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >I agree to Terms of Service</label
                >
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
