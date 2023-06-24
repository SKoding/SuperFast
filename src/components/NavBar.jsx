import React from "react";

function NavBar() {
  return (
    <div class="h-16 bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-2 pl-0">
        <a href="#" class="flex">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8 mr-3"
            alt="Superfast Fibre"
          />
          <span class="text-2xl text-white font-semibold whitespace-nowrap dark:text-white">
            Superfast <span class="text-[#F70000]">Fibre</span>
          </span>
        </a>
        <div class="flex md:order-2">
          <div
            class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            // id="user-menu-button"
            // aria-expanded="false"
            // data-dropdown-toggle="user-dropdown"
            // data-dropdown-placement="bottom"
          >
            <img
              class="w-12 h-12 rounded-full border-2 border-gray-400"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="user photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
