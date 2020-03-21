<template>
    <div>

        <section class="p-8 pp-page-wrap">

            <h1
                class="inline-block align-middle">
                My Brands (4)
            </h1>
            <div class="divider"></div>
            <div 
                 class="overflow-hidden w-2/3"
            >
                <div class="">
                    <div class="inline-block relative">
                        <input class="search pl-8 pr-4 rounded border border-bluegrey-darker"
                               type="text"
                               placeholder="Search for a campaign"
                               
                        >
                        <img src="img/search@1x.svg" class="absolute pin-l pin-t ml-3 mt-3">
                    </div>
                    <div class="inline-block relative ml-8 float-right">
                        <label>Filter</label>
                        <select class="appearance-none ml-4 px-4 rounded border bg-bluegrey-darker border-bluegrey-darker"
                              
                        >
                            <option value="all">All Countries</option>
                            <option>Australia</option>
                            <option>Germany</option>
                            <option>India</option>
                            <option>Philippines</option>
                            <option>Russia</option>
                            <option>Singapore</option>
                        </select>
                        <img src="img/dropdown.svg" class="absolute pin-r pin-t mr-4 mt-4">
                    </div>
                </div>
            </div>

            <div
                 class="bg-white px-4 py-8 mt-3 border-grey-superlightest rounded border w-2/3 my-campaigns-table">
                <table class="block w-full">
                    <thead class="block w-full px-8 py-4 bg-blue-lightest">
                    <tr class="w-full overflow-hidden block">
                        <th width="33%"
                            class="text-left text-xs font-medium inline-block float-left text-grey-darkest">
                      <span class="inline-block cursor-pointer relative campaign-title uppercase">
                          Brand Name
                      </span>
                        </th>
                        <th width="33%"
                            class="text-left text-xs font-medium inline-block float-left text-grey-darkest">
                      <span class="inline-block cursor-pointer relative campaign-title uppercase">
                          Country
                      </span>
                        </th>
                        <th width="33%"
                            class="text-left text-xs font-medium inline-block float-left text-grey-darkest">
                      <span class="inline-block cursor-pointer relative campaign-title uppercase">
                          Country Code
                      </span>
                        </th>
                        <th width="1%" class="float-left"></th>
                    </tr>
                    </thead>

                    <tbody class="block w-full">
                    <router-link
                            to="/manage-brands"
                           
                    >
                        <tr class="cursor-pointer w-full  p-8 overflow-hidden border-b border-grey-medium-light block hover:bg-blue-superlightest">
                            <td width="33%" class="pr-6 float-left font-medium inline-block">
                                <span class="text-grey-darkest text-xs font-medium">Toluna (AU)</span>
                            </td>
                            <td width="33%" class="pr-6 float-left font-medium inline-block">
                                <span class="text-grey-light text-xs uppercase font-medium">Australia</span>
                            </td>
                            <td width="33%" class="pr-6 float-left font-medium inline-block">
                                <span class="text-grey-light capitalize">AU</span>
                            </td>
                            <td width="1%" class="float-left font-medium inline-block">
                                <span class="text-grey-light">
                                    <img src="img/right-arrow.svg"
                                         alt="arrow">
                                </span>
                            </td>
                        </tr>
                    </router-link>
                    <router-link
                            to="/manage-brands"
                           
                    >
                        <tr class="cursor-pointer w-full  p-8 overflow-hidden border-b border-grey-medium-light block hover:bg-blue-superlightest">
                            <td width="33%" class="pr-6 float-left font-medium inline-block">
                                <span class="text-grey-darkest text-xs font-medium">Toluna (AU)</span>
                            </td>
                            <td width="33%" class="pr-6 float-left font-medium inline-block">
                                <span class="text-grey-light text-xs uppercase font-medium">Australia</span>
                            </td>
                            <td width="33%" class="pr-6 float-left font-medium inline-block">
                                <span class="text-grey-light capitalize">AU</span>
                            </td>
                            <td width="1%" class="float-left font-medium inline-block">
                                <span class="text-grey-light">
                                    <img src="img/right-arrow.svg"
                                         alt="arrow">
                                </span>
                            </td>
                        </tr>
                    </router-link>
                    <router-link
                            to="/manage-brands"
                           
                    >
                        <tr class="cursor-pointer w-full  p-8 overflow-hidden border-b border-grey-medium-light block hover:bg-blue-superlightest">
                            <td width="33%" class="pr-6 float-left font-medium inline-block">
                                <span class="text-grey-darkest text-xs font-medium">Toluna (AU)</span>
                            </td>
                            <td width="33%" class="pr-6 float-left font-medium inline-block">
                                <span class="text-grey-light text-xs uppercase font-medium">Australia</span>
                            </td>
                            <td width="33%" class="pr-6 float-left font-medium inline-block">
                                <span class="text-grey-light capitalize">AU</span>
                            </td>
                            <td width="1%" class="float-left font-medium inline-block">
                                <span class="text-grey-light">
                                    <img src="img/right-arrow.svg"
                                         alt="arrow">
                                </span>
                            </td>
                        </tr>
                    </router-link>
                    <router-link
                            to="/manage-brands"
                           
                    >
                        <tr class="cursor-pointer w-full  p-8 overflow-hidden border-b border-grey-medium-light block hover:bg-blue-superlightest">
                            <td width="33%" class="pr-6 float-left font-medium inline-block">
                                <span class="text-grey-darkest text-xs font-medium">Toluna (AU)</span>
                            </td>
                            <td width="33%" class="pr-6 float-left font-medium inline-block">
                                <span class="text-grey-light text-xs uppercase font-medium">Australia</span>
                            </td>
                            <td width="33%" class="pr-6 float-left font-medium inline-block">
                                <span class="text-grey-light capitalize">AU</span>
                            </td>
                            <td width="1%" class="float-left font-medium inline-block">
                                <span class="text-grey-light">
                                    <img src="img/right-arrow.svg"
                                         alt="arrow">
                                </span>
                            </td>
                        </tr>
                    </router-link>
                    </tbody>

                </table>
            </div>

            <!-- <div>
                <p>Whoops! We are having technical issues at the moment. Pardon our dust!</p>
            </div> -->
        </section>

    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.pp-page-wrap {
    padding-top: 100px;
}
    .my-campaigns-table {
        .status-icon {
            width: 10px;
            height: 10px;
            margin-right: 5px;
            &.active {
                background: #8DC63F;
            }
            &.paused {
                background: #F7941E;
            }
        }

        .low {
            color: #1888C9;
        }
        .medium {
            color: #F57207;
        }
        .high {
            color: #F84438;
        }
        .veryhigh {
            color: #D0021B;
        }

    }

    select {
        width: 150px;
        height: 43px;
    }

    .search {
        width: 300px;
        height: 43px;
    }
</style>
