"use client";

import { useState } from "react";
import {
  clubPricing,
  formatClubPerSkier,
  formatClubPrice,
  type ClubBillingPeriod,
  type ClubPlanId,
} from "@/lib/consumerPricing";

type ClubPlan = {
  id: ClubPlanId;
  name: string;
  features: string[];
  badge?: string;
};

export default function ClubPricing({
  locale,
  plans,
  billingMonthly,
  billingYearly,
  saveBadge,
  contactVolume,
}: {
  locale: string;
  plans: ClubPlan[];
  billingMonthly: string;
  billingYearly: string;
  saveBadge: string;
  contactVolume: string;
}) {
  const [period, setPeriod] = useState<ClubBillingPeriod>("monthly");
  const note = clubPricing(locale).note;
  return (
    <>
      <div className="mb-8 flex items-center justify-center gap-3">
        <span className={`text-sm font-medium ${period === "monthly" ? "text-white" : "text-text-secondary"}`}>
          {billingMonthly}
        </span>
        <button
          type="button"
          aria-label={`${billingMonthly} / ${billingYearly}`}
          aria-pressed={period === "yearly"}
          onClick={() => setPeriod(period === "monthly" ? "yearly" : "monthly")}
          className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-700"
        >
          <span className={`inline-block h-5 w-5 rounded-full bg-white transition ${period === "yearly" ? "translate-x-5" : "translate-x-0.5"}`} />
        </button>
        <span className={`text-sm font-medium ${period === "yearly" ? "text-white" : "text-text-secondary"}`}>
          {billingYearly}
        </span>
        <span className="rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-bg-primary">
          {saveBadge}
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-3xl border bg-bg-card p-8 ${
              plan.badge ? "border-accent shadow-xl shadow-sky-500/10" : "border-border"
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-bg-primary">
                {plan.badge}
              </div>
            )}
            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
            <div className="mt-4 text-3xl font-black text-white">{formatClubPrice(plan.id, period, locale)}</div>
            <div className="mt-1 text-sm text-text-secondary">
              {plan.id === "unlimited" ? contactVolume : formatClubPerSkier(plan.id, period, locale)}
            </div>
            <ul className="mt-6 space-y-3 text-text-secondary">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-text-secondary">
        {note}
      </p>
    </>
  );
}
