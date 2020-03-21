<template>
    <section class="px-8 pb-8">
        <div class="px-8 mx-auto">
            <h5 class="text-sm font-medium mb-2">Targeting</h5>
            <p class="text-13 mb-5">Information about the set target audience of this campaign.</p>
            <hr class="border-b  border-grey-medium-light ">
            <div class="mb-5">
            </div>

            <div>
                <div>
                    <div class="mb-4">
                        <label for="quota" class="text-13 mb-2 block">Landing Page URL</label>
                        <input type="text" value="http://au.toluna.com/" id="quota"
                               class="border border-grey-light p-3 text-13 block w-full disabled"
                               :disabled="true">
                    </div>
                    <div class="mb-4 border-b border-grey-medium-light pb-4">
                        <div class="inline-block w-1/3 float-left text-13">Country</div>
                        <div class="inline-block w-2/3 text-grey-light text-13">Australia</div>
                    </div>
                    <div class="mb-4 border-b border-grey-medium-light pb-4">
                        <div class="inline-block w-1/3 float-left text-13 capitalize">Gender</div>
                        <div class="inline-block w-2/3 text-grey-light text-13">All</div>
                    </div>
                    <div class="mb-4 border-b border-grey-medium-light pb-4">
                        <div class="inline-block w-1/3 float-left text-13 capitalize">Age</div>
                        <div class="inline-block w-2/3 text-grey-light text-13">15 and above</div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
  

</script>

<style lang="scss" scoped>


    .active {
        background: #8DC63F;
    }

    .disabled {
        background-color: #EAEEF1;
        border-color: #EAEEF1 !important;
        color: #999;
    }
</style>