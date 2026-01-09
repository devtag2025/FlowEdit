'use client'
import PlanCards from "@/components/service/PlanCards";
import TabNavigation from "@/components/service/TabNavigation";
import { useState } from "react";

export default function ServicePage (){
    const [activeTab, setActiveTab] = useState("overview");
    return (
        <>
            <main className="min-h-screen bg-secondary py-5 pb-10 ">
                <header className="mb-10 pl-10 pr-8">
                    <h1 className="text-accent font-semibold text-3xl mb-2">Services & Billing</h1>
                    <p className="text-accent">Manage your subscription, view invoices, and update payment details.</p>
                </header>

            <TabNavigation activeTab={activeTab} onChange={setActiveTab}  />

            {activeTab === "overview" && <PlanCards />}
            {/* {activeTab === "invoices" && }
            {activeTab === "payment" &&} */}
                
            </main>
        </>
    )
}