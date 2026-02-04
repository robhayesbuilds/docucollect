"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { waitlistSchema, type WaitlistFormData } from "@/lib/validations"
import { CheckCircle, Loader2 } from "lucide-react"

export function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  })

  const onSubmit = async (data: WaitlistFormData) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Waitlist signup:", data)
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-4 p-8 rounded-2xl bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800">
        <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">
          You&apos;re on the list!
        </h3>
        <p className="text-green-700 dark:text-green-300 text-center">
          We&apos;ll notify you as soon as DocuCollect launches.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md">
      <div>
        <Input
          placeholder="Your name"
          {...register("name")}
          className="h-12"
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Input
          type="email"
          placeholder="you@yourfirm.com"
          {...register("email")}
          className="h-12"
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <select
          {...register("firmSize")}
          className="w-full h-12 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">How many people in your firm?</option>
          <option value="solo">Solo practitioner</option>
          <option value="2-5">2-5 people</option>
          <option value="6-20">6-20 people</option>
          <option value="20+">20+ people</option>
        </select>
        {errors.firmSize && (
          <p className="text-sm text-red-500 mt-1">{errors.firmSize.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full h-12 text-lg" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Joining...
          </>
        ) : (
          "Join the Waitlist"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Free to join. No credit card required. Launch pricing: $29/month.
      </p>
    </form>
  )
}
