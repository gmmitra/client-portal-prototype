<template>
    <div>
        <section class="p-8 pp-page-wrap">
            <h1>My Campaigns campaigns 6</h1>
            <div class="divider"></div>
            <div class="overflow-hidden">
                <h2 class="py-3 text-grey-darkest float-left">August 2018</h2>
                <div class="float-right">
                    <div class="inline-block relative">
                        <input class="search pl-10 pr-4" type="text" placeholder="Search for a campaign">
                        <img src="img/search@1x.svg" class="absolute pin-t pin-l ml-3 mt-3">
                    </div>
                    <div class="inline-block relative ml-8">
                        <label>Filter</label>
                        <select class="appearance-none ml-4 px-4">
                            <option>All</option>
                            <option>Not All</option>
                        </select>
                        <img src="img/dropdown.svg" class="absolute pin-t pin-r mr-4 mt-4">
                    </div>
                </div>
            </div>

            <div class="bg-white px-4 py-8 mt-3 border my-campaigns-table">
                <table class="block w-full">
                    <thead class="block w-full px-8 py-4 table-head">
                    <tr class="w-full">
                        <th width="10%">
                      <span class="inline-block cursor-pointer relative campaign-title uppercase">Campaign Code
                      <span class="absolute z-1 mt-1 text-white tooltip p-4">
                          <span class="inline-block tip"></span>
                          <h5 class="mb-2 font-normal capitalize">Campaign Code</h5>
                          <p class="normal-case">
                           A brief information about this particular column.
                          </p>
                      </span>
                      </span>
                        </th>
                        <th width="10%">
                      <span class="inline-block cursor-pointer relative campaign-title uppercase">Brand Name
                      <span class="absolute z-1 mt-1 text-white tooltip p-4">
                          <span class="inline-block tip"></span>
                          <h5 class="mb-2 font-normal capitalize">Brand Name</h5>
                          <p class="normal-case">
                           A brief information about this particular column.
                          </p>
                      </span>
                      </span>
                        </th>
                        <th width="8%">
                      <span class="inline-block cursor-pointer relative campaign-title uppercase">Status
                      <span class="absolute z-1 mt-1 text-white tooltip p-4">
                          <span class="inline-block tip"></span>
                          <h5 class="mb-2 font-normal capitalize">Status</h5>
                          <p class="normal-case">
                           A brief information about this particular column.
                          </p>
                      </span>
                      </span>
                        </th>
                        <th width="8%">
                      <span class="inline-block cursor-pointer relative campaign-title uppercase">Bid Price
                      <span class="absolute z-1 mt-1 text-white tooltip p-4">
                          <span class="inline-block tip"></span>
                          <h5 class="mb-2 font-normal capitalize">Bid Price</h5>
                          <p class="normal-case">
                           A brief information about this particular column.
                          </p>
                      </span>
                      </span>
                        </th>
                        <th width="8%">
                      <span class="inline-block cursor-pointer relative campaign-title uppercase">Clicks
                      <span class="absolute z-1 mt-1 text-white tooltip p-4">
                          <span class="inline-block tip"></span>
                          <h5 class="mb-2 font-normal capitalize">Clicks</h5>
                          <p class="normal-case">
                           A brief information about this particular column.
                          </p>
                      </span>
                      </span>
                        </th>
                        <th width="8%">
                      <span class="inline-block cursor-pointer relative campaign-title uppercase">Competition
                      <span class="absolute z-1 mt-1 text-white tooltip p-4">
                          <span class="inline-block tip"></span>
                          <h5 class="mb-2 font-normal capitalize">Competition</h5>
                          <p class="normal-case">
                           A brief information about this particular column.
                          </p>
                      </span>
                      </span>
                        </th>
                        <th width="12%">
                      <span class="inline-block cursor-pointer relative campaign-title uppercase">Average Pos
                      <span class="absolute z-1 mt-1 text-white tooltip p-4">
                          <span class="inline-block tip"></span>
                          <h5 class="mb-2 font-normal capitalize">Average Pos</h5>
                          <p class="normal-case">
                           A brief information about this particular column.
                          </p>
                      </span>
                      </span>
                        </th>
                        <th width="12%">
                      <span class="inline-block cursor-pointer relative campaign-title uppercase">Campaign Quality
                      <span class="absolute z-1 mt-1 text-white tooltip p-4">
                          <span class="inline-block tip"></span>
                          <h5 class="mb-2 font-normal capitalize">Campaign Quality</h5>
                          <p class="normal-case">
                           A brief information about this particular column.
                          </p>
                      </span>
                      </span>
                        </th>
                        <th width="6%">
                      <span class="inline-block cursor-pointer relative campaign-title uppercase">Quota
                      <span class="absolute z-1 mt-1 text-white tooltip p-4">
                          <span class="inline-block tip"></span>
                          <h5 class="mb-2 font-normal capitalize">Quota</h5>
                          <p class="normal-case">
                           A brief information about this particular column.
                          </p>
                      </span>
                      </span>
                        </th>
                        <th width="12%" class="text-center">ESTIMATED PROGRESS</th>
                        <th width="3%"></th>
                    </tr>
                    </thead>

                    <tbody class="block w-full">
                    <router-link to="/manage-campaigns"><tr class="cursor-pointer w-full  p-8">
                        <td width="10%">
                            <span class="text-grey-darkest text-xs font-medium">AU-017-tln</span>
                        </td>
                        <td width="10%">
                            <span class="text-grey-darkest text-xs uppercase font-medium">Toluna (AU)</span>
                        </td>
                        <td width="8%">
                            <span class="rounded-full inline-block align-middle status-icon active"
                                 ></span>
                            <span class="text-grey-light capitalize">Active</span>
                        </td>
                        <td width="8%">
                            <span class="text-grey-light">5 USD</span>
                        </td>
                        <td width="8%">
                            <span class="text-grey-light">100</span>
                        </td>
                        <td width="8%">
                            <span class="text-grey-light capitalize high">High</span>
                        </td>
                        <td width="12%">
                            <span class="text-grey-light">12</span>
                        </td>
                        <td width="12%">
                            <span class="text-grey-light">Below Average</span>
                        </td>
                        <td width="6%">
                            <span class="text-grey-light">50</span>
                        </td>
                        <td width="12%" class="text-center">
                            <span class="inline-block w-full text-grey-light">50-75%</span>
                        </td>
                        <td width="3%" class="text-center">
                            <span class="text-grey-light"> <img src="img/right-arrow.svg" alt="arrow"> </span>
                        </td>
                    </tr></router-link>
                    <router-link to="/manage-campaigns"><tr class="cursor-pointer w-full  p-8">
                        <td width="10%">
                            <span class="text-grey-darkest text-xs font-medium">AU-017-tln</span>
                        </td>
                        <td width="10%">
                            <span class="text-grey-darkest text-xs uppercase font-medium">Toluna (AU)</span>
                        </td>
                        <td width="8%">
                            <span class="rounded-full inline-block align-middle status-icon paused"
                                 ></span>
                            <span class="text-grey-light capitalize">Paused</span>
                        </td>
                        <td width="8%">
                            <span class="text-grey-light">5 USD</span>
                        </td>
                        <td width="8%">
                            <span class="text-grey-light">100</span>
                        </td>
                        <td width="8%">
                            <span class="text-grey-light capitalize medium">Medium</span>
                        </td>
                        <td width="12%">
                            <span class="text-grey-light">12</span>
                        </td>
                        <td width="12%">
                            <span class="text-grey-light">Below Average</span>
                        </td>
                        <td width="6%">
                            <span class="text-grey-light">50</span>
                        </td>
                        <td width="12%" class="text-center">
                            <span class="inline-block w-full text-grey-light">50-75%</span>
                        </td>
                        <td width="3%" class="text-center">
                            <span class="text-grey-light"> <img src="img/right-arrow.svg" alt="arrow"> </span>
                        </td>
                    </tr></router-link>
                    <router-link to="/manage-campaigns"><tr class="cursor-pointer w-full  p-8">
                        <td width="10%">
                            <span class="text-grey-darkest text-xs font-medium">AU-017-tln</span>
                        </td>
                        <td width="10%">
                            <span class="text-grey-darkest text-xs uppercase font-medium">Toluna (AU)</span>
                        </td>
                        <td width="8%">
                            <span class="rounded-full inline-block align-middle status-icon active"
                                 ></span>
                            <span class="text-grey-light capitalize">Active</span>
                        </td>
                        <td width="8%">
                            <span class="text-grey-light">5 USD</span>
                        </td>
                        <td width="8%">
                            <span class="text-grey-light">100</span>
                        </td>
                        <td width="8%">
                            <span class="text-grey-light capitalize low">Low</span>
                        </td>
                        <td width="12%">
                            <span class="text-grey-light">12</span>
                        </td>
                        <td width="12%">
                            <span class="text-grey-light">Below Average</span>
                        </td>
                        <td width="6%">
                            <span class="text-grey-light">50</span>
                        </td>
                        <td width="12%" class="text-center">
                            <span class="inline-block w-full text-grey-light">50-75%</span>
                        </td>
                        <td width="3%" class="text-center">
                            <span class="text-grey-light"> <img src="img/right-arrow.svg" alt="arrow"> </span>
                        </td>
                    </tr></router-link>
                    <router-link to="/manage-campaigns"><tr class="cursor-pointer w-full  p-8">
                        <td width="10%">
                            <span class="text-grey-darkest text-xs font-medium">AU-017-tln</span>
                        </td>
                        <td width="10%">
                            <span class="text-grey-darkest text-xs uppercase font-medium">Toluna (AU)</span>
                        </td>
                        <td width="8%">
                            <span class="rounded-full inline-block align-middle status-icon active"
                                 ></span>
                            <span class="text-grey-light capitalize">Active</span>
                        </td>
                        <td width="8%">
                            <span class="text-grey-light">5 USD</span>
                        </td>
                        <td width="8%">
                            <span class="text-grey-light">100</span>
                        </td>
                        <td width="8%">
                            <span class="text-grey-light capitalize high">High</span>
                        </td>
                        <td width="12%">
                            <span class="text-grey-light">12</span>
                        </td>
                        <td width="12%">
                            <span class="text-grey-light">Below Average</span>
                        </td>
                        <td width="6%">
                            <span class="text-grey-light">50</span>
                        </td>
                        <td width="12%" class="text-center">
                            <span class="inline-block w-full text-grey-light">50-75%</span>
                        </td>
                        <td width="3%" class="text-center">
                            <span class="text-grey-light"> <img src="img/right-arrow.svg" alt="arrow"> </span>
                        </td>
                    </tr></router-link>

                    </tbody>

                </table>
            </div>
        </section>

    </div>
</template>

<script>
export default {
  name: 'home',

}
</script>

<style lang="scss" scoped>
    .my-campaigns-table {
       
        border-color: #F0F3F4;
        border-radius: 4px;
        thead{
            tr:hover {
                background: #FAFBFC;
            }
        }
        th {
            font-weight: 500;
            font-size: 12px;
            text-align: left;
            display: inline-block;
            color: #323C47;
        }
        td {
            font-weight: 400;
            display: inline-block;

        }
        tr {
            display: block;
            border-bottom: 1px solid #E7E7E7;
            &:hover {
                background: #F3FBFF;
            }
        }
        thead tr {
            border: none;
        }
        .table-head {
            background: #FAFBFC;
        }
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
            color: #1D8ED0;
        }
        .medium {
            color: #F57207;
        }
        .high {
            color: #D31721;
        }

    }

    select {
        background-color: #EAEEF1;
        width: 300px;
        height: 43px;
        border: 1px solid #EAEEF1;
        border-radius: 3px;
    }

    .search {
        width: 300px;
        height: 43px;
        border-radius: 3px;
        border: 1px solid #E0E4ED;
    }

    .campaign-title {
        	color: #323C47;
        .tooltip {
            border-radius: 3px;
            box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.16), 0 8px 24px 0 rgba(0, 0, 0, 0.2);
            background-color: #1F2836;
            width: 230px;
            left: 50%;
            margin-left: -115px;
            display: none;
            
            h5 {
                font-size: 16px;
                font-weight: 500;
            }
            p {
                font-size: 14px;
                font-weight: 400;
            }
            .tip {
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 0 10px 10px 10px;
                border-color: transparent transparent #1F2836 transparent;
                border-style: inset;
                -webkit-transform: rotate(360deg);
                position: absolute;
                top: -5px;
                margin-left: -6px;
                left: 50%;
            }
        }
        &:hover {
            .tooltip {
                display: block;
            }
        }
    }
tbody {
    a {
        text-decoration: none;
    }
}
</style>
