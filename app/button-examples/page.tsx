import { StyledButton } from "@/components/ui/styled-button"

export default function ButtonExamplesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Button Examples</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 p-6 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Primary Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <StyledButton variant="primary">Primary Button</StyledButton>
            <StyledButton variant="primary" withArrow>
              With Arrow
            </StyledButton>
            <StyledButton variant="primary" elevated>
              Elevated
            </StyledButton>
            <StyledButton variant="primary" disabled>
              Disabled
            </StyledButton>
          </div>
        </div>

        <div className="space-y-6 p-6 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Inverse Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <StyledButton variant="inverse">Inverse Button</StyledButton>
            <StyledButton variant="inverse" withArrow>
              With Arrow
            </StyledButton>
            <StyledButton variant="inverse" elevated>
              Elevated
            </StyledButton>
            <StyledButton variant="inverse" disabled>
              Disabled
            </StyledButton>
          </div>
        </div>

        <div className="space-y-6 p-6 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Outline Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <StyledButton variant="outline">Outline Button</StyledButton>
            <StyledButton variant="outline" withArrow>
              With Arrow
            </StyledButton>
            <StyledButton variant="outline" elevated>
              Elevated
            </StyledButton>
            <StyledButton variant="outline" disabled>
              Disabled
            </StyledButton>
          </div>
        </div>

        <div className="space-y-6 p-6 border border-gray-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Ghost Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <StyledButton variant="ghost">Ghost Button</StyledButton>
            <StyledButton variant="ghost" withArrow>
              With Arrow
            </StyledButton>
            <StyledButton variant="ghost" disabled>
              Disabled
            </StyledButton>
          </div>
        </div>

        <div className="space-y-6 p-6 border border-gray-200 rounded-lg col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Button Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <StyledButton variant="primary" size="sm">
              Small
            </StyledButton>
            <StyledButton variant="primary">Default</StyledButton>
            <StyledButton variant="primary" size="lg">
              Large
            </StyledButton>
            <StyledButton variant="primary" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </StyledButton>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <StyledButton variant="inverse" size="sm">
              Small
            </StyledButton>
            <StyledButton variant="inverse">Default</StyledButton>
            <StyledButton variant="inverse" size="lg">
              Large
            </StyledButton>
            <StyledButton variant="inverse" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  )
}
