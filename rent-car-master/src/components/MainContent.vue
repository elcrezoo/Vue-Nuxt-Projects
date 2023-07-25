<template>
    <div>
        <b-carousel
                id="carousel-1"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
        >
            <b-carousel-slide>
                <template v-slot:img>
                    <img
                            class="imgSlideCarousel imgMirror"
                            src="https://m.atcdn.co.uk/ect/media/w1920/brand-store/volkswagen/tiguan/hero.jpg"
                            alt="image slot"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide>
                <template v-slot:img>
                    <img
                            class="imgSlideCarousel"
                            src="https://electrek.co/wp-content/uploads/sites/3/2019/12/SX3Semi-Family-e1534526883239.jpg?quality=82&strip=all&w=1600"
                            alt="image slot"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide>
                <template v-slot:img>
                    <img
                            class="imgSlideCarousel"
                            src="https://az749841.vo.msecnd.net/sitesencom/alv1/731e092e-cc42-4fab-9a11-22fb3cac036e/skoda-scala-m20-gallery-01.bf0af9547dc8f97dd082b0f964ef8749.fit-1450x760.jpg"
                            alt="image slot"
                    >
                </template>
            </b-carousel-slide>
            <b-carousel-slide>
                <template v-slot:img>
                    <img
                            class="imgSlideCarousel"
                            src="https://suppliermatch.org/wp-content/uploads/2019/03/Volkswagen-Australia-Cover.jpg"
                            alt="image slot"
                    >
                </template>
            </b-carousel-slide>
        </b-carousel>
        <b-form class="formReservation" @submit.stop.prevent>
            <label class="mr-sm-2">Pick location</label>
            <b-form-select v-model="pickLocationValue" :options="pickLocation" size="sm" class="mt-1"></b-form-select>
            <label class="mr-sm-2 mt-2">Return location</label>
            <b-form-select v-model="returnLocationValue" :options="returnLocation" size="sm" class="mt-1"></b-form-select>
            <label class="mt-3" for="example-datepicker">Choose a pick date</label>
            <div class="timeClass" >
                <b-form-datepicker id="example-datepicker" v-model="pickDate" class="mr-2" ></b-form-datepicker>
                <b-form-timepicker v-model="pickTime" locale="en"></b-form-timepicker>
            </div>

            <label class="mt-2" for="example-datepicker">Choose a return date</label>
            <div class="timeClass">
                <b-form-datepicker id="example-datepicker" v-model="returnDate" class="mr-2"></b-form-datepicker>
                <b-form-timepicker v-model="returnTime" locale="en"></b-form-timepicker>
            </div>
            <b-button class="mt-3" @click="gotoRent()" block variant="outline-dark">Search</b-button>
        </b-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                sliding: null,
                pickLocation:['istanbul','izmir','antalya','eskişehir'],
                pickLocationValue:'istanbul',
                returnLocation:['istanbul','izmir','antalya','eskişehir'],
                returnLocationValue:'istanbul',
                pickDate:'',
                pickTime:'',
                returnDate:'',
                returnTime:'',
                userSelect:[],
            }
        },
        methods: {
            onSlideStart() {
                this.sliding = true
            },
            onSlideEnd() {
                this.sliding = false
            },
            gotoRent(){
                this.userSelect.push(this.pickLocationValue,this.returnLocationValue
                    ,this.pickDate,this.pickTime,this.returnDate,this.returnTime);
                const userSelect =this.userSelect;
                this.$router.push({name:'Rent',params:{userData:userSelect}});
                //window.history.length >1 ? this.$router.go(-1) :this.$router.push('/');
            }
        }
    }
</script>
<style>
    .formReservation{
        position: absolute;
        min-height: 360px;
        max-height: 440px;
        max-width: 500px;
        background-color: rgba(255,255,255,0.7);
        padding: 15px;
        margin-top: -600px;
        margin-left: 140px;
        z-index: 999;
    }
    .imgSlideCarousel{
        width: 100%;
        height: 700px;
    }
    .timeClass{
        display: flex;
        flex-direction: row;
    }
    .imgMirror{
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
    }
</style>