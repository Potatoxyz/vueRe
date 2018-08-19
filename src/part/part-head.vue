<template>
    <div class="part-head">
        <nav class="navbar navbar-expand-md navbar-blue">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#"><span class="fa fa-file-o"></span>Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><span class="fa fa-envelope"></span>Email me</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><span class="fa fa-print"></span>Print</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="head-content p-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 left-part">
                        <div class="img-wrap p-2">
                            <img src="../imgs/pic1.jpg" alt="">
                        </div>
                        <div class="text-wrap pt-2">
                            <h2 class="name pb-2 text-uppercase">john doe</h2>
                            <p>Passionate Web Designer</p>
                        </div>
                    </div>
                    <div class="col-md-6 right-part">
                        <ul class="pt-2">
                            <li><span class="title">Email:</span>mail@example.com</li>
                            <li><span class="title">Website:</span>info@example.com</li>
                            <li><span class="title">Phone no:</span>123-456-7890</li>
                            <li><span class="title">Address:</span>1234k Avenue, 4th block, Newyork City.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "part-head"
    }
</script>

<style lang="scss">
    @import "../common.scss";
    .part-head{
        .head-content{
            background: url("../imgs/pic2.jpg") no-repeat;
            background-size: cover;
            background-position:center;
            color:white;
            .left-part{
                display: flex;
                align-items: flex-start;
                .img-wrap{
                    width: 40%;
                    background: white;
                    border:2px solid $primary;
                    img{
                        max-width: 100%;
                    }
                }
                .text-wrap{
                    width: 65%;
                    padding-left: 15px;
                    padding-right: 15px;
                    .name{
                        color: $primary;
                        font-weight: bold;
                    }
                }
            }
            .right-part{
                .title{
                    display: inline-block;
                    width: 120px;
                    color: $primary;
                    font-weight: bold;
                    font-size: $fz-normal;
                }
                ul{
                    padding-left: 0;
                    li{
                        margin-bottom: 15px;
                        font-size: $fz-sm;
                    }
                }
            }
        }
    }
</style>