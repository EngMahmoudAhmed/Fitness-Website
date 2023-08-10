import React from 'react'
import "./plan.css"

export default function Plan() {
    return (
        <div>
            <section class="plan" id="Plan">
                <h4 class="heading">membership plan</h4>
                <div class="box-container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="plan-title">Basic</div>
                            <div class="plan-sale">25$/<span>Mo</span> <br /> <span>3 Months</span> </div>
                            <ul class="">
                                <li>Weight Lifting</li>
                                <li>Cardio</li>
                                <li>Yoga</li>
                                <li>Training</li>
                                <li>Protein Powder</li>
                            </ul>
                            <div class="btn">check out</div>
                        </div>

                        <div class="col-md-4">
                            <div class="plan-title">standard</div>
                            <div class="plan-sale">40$/<span>Mo</span> <br /> <span>6 Months</span> </div>
                            <ul class="">
                                <li>Weight Lifting</li>
                                <li>Cardio</li>
                                <li>Yoga</li>
                                <li>Training</li>
                                <li>Protein Powder</li>
                            </ul>
                            <div class="btn">check out</div>
                        </div>


                        <div class="col-md-4">
                            <div class="plan-title">premium</div>
                            <div class="plan-sale">50$/<span>Mo</span> <br /> <span>12 Months</span> </div>
                            <ul class="">
                                <li>Weight Lifting</li>
                                <li>Cardio</li>
                                <li>Yoga</li>
                                <li>Training</li>
                                <li>Protein Powder</li>
                            </ul>
                            <div class="btn">check out</div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
