"use client"

import { StyledButton } from "@/components/ui/styled-button"
import { StyledCard } from "@/components/ui/styled-card"
import { StyledHeading } from "@/components/ui/styled-heading"
import { StyledText } from "@/components/ui/styled-text"
import { StyledTag } from "@/components/ui/styled-tag"
import { useEffect } from "react"

export default function ExamplePage() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-offwhite flex flex-col">
      <main className="flex-1">
        <section className="container mx-auto py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <StyledHeading level={1} className="mb-6">
              Styled Components Example
            </StyledHeading>

            <StyledText className="mb-8">
              This page demonstrates the use of our styled components that use the centralized styling configuration.
              You can easily change the appearance of these components by modifying the theme configuration.
            </StyledText>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <StyledHeading level={2}>Buttons</StyledHeading>

                <div className="space-y-4">
                  <StyledButton>Primary Button</StyledButton>
                  <StyledButton variant="outline">Outline Button</StyledButton>
                  <StyledButton variant="ghost">Ghost Button</StyledButton>
                  <StyledButton withArrow>Button with Arrow</StyledButton>
                </div>
              </div>

              <div className="space-y-4">
                <StyledHeading level={2}>Tags</StyledHeading>

                <div className="flex flex-wrap gap-2">
                  <StyledTag href="/category/politics">Politics</StyledTag>
                  <StyledTag href="/category/environment">Environment</StyledTag>
                  <StyledTag href="/category/economy">Economy</StyledTag>
                  <StyledTag href="/category/technology">Technology</StyledTag>
                </div>
              </div>
            </div>

            <StyledHeading level={2} className="mb-6">
              Cards
            </StyledHeading>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <StyledCard key={i} className="p-4">
                  <StyledHeading level={3} className="mb-2">
                    Card Title {i}
                  </StyledHeading>
                  <StyledText variant="small" className="mb-4">
                    This is a styled card component that uses our centralized styling configuration.
                  </StyledText>
                  <StyledButton variant="ghost">Read More</StyledButton>
                </StyledCard>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
