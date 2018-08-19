<template>
    <div class="part-pd aboutme">
        <div class="container ">
            <h3 class="part-title">about me</h3>
            <p class="part-des">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur .</p>
            <div class="row">
                <div class="col-lg-6 ab-part ab-left">
                    <h3 class="ab-title">教育经历</h3>
                    <div class="collapse-wrap">
                        <div v-for="item in aboutData"
                                  :key="item.id"
                        >
                            <div class="collapse-item" data-toggle="collapse" :data-target="'#edu'+item.id">
                                <div class="title">
                                    <span class="time">{{item.time}}</span>
                                    <span>{{item.title}}</span>
                                    <span class="fa fa-chevron-down"></span>
                                </div>
                            </div>
                            <div class="collapse show" :id="'edu'+item.id">
                                <ul class="collapse-content">
                                    <li v-for="subitem in item.content" :key="subitem"><span class="fa fa-check"></span>{{subitem}}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 ab-part ab-right">
                    <h3 class="ab-title">技能评估</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {aboutData} from './about.data.js';
    export default {
        name: "aboutme",
        data:function () {
            return {
                aboutData:aboutData
            }
        }
    }
</script>

<style lang="scss">
    @import "../common.scss";
    .aboutme{
        .ab-title{
            margin-bottom: 30px;
        }
        .ab-part{
            padding-top: 30px;
            padding-bottom: 30px;
        }
        .ab-left{
            .ab-title{
                color:$primary;
            }
            .collapse-wrap{
                border:1px solid #d4d4d4;
                .collapse-item{
                    padding: 20px 15px;
                    border-bottom: 1px solid #d4d4d4;
                    .title{
                        display: flex;
                        justify-content: space-between;
                    }
                }
                ul.collapse-content{
                    margin-bottom: 0;
                    border-bottom: 1px solid #d4d4d4;
                    padding: 15px;
                    padding-left: 70px;
                    li{
                        margin-bottom: 10px;
                        .fa{
                            color:$primary
                        }
                    }
                }
            }
        }
        .ab-right{
            background: url("../imgs/pic3.jpg") no-repeat;
            background-size: cover;
            .ab-title{
                color:white;
            }
        }
    }
</style>