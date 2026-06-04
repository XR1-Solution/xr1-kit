import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <section data-testid="demo-alert" className="flex flex-col gap-3">
      <h2 className="font-display text-xl text-fg-0">alert</h2>
      <div className="flex flex-col gap-2 max-w-lg">
        <Alert variant="info">
          <AlertTitle>Deployment queued</AlertTitle>
          <AlertDescription>Your build is queued and will start shortly.</AlertDescription>
        </Alert>
        <Alert variant="success">
          <AlertTitle>Deployment complete</AlertTitle>
          <AlertDescription>atlas-core v1.4.2 is live.</AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertTitle>High memory usage</AlertTitle>
          <AlertDescription>Instance usage is above 80%.</AlertDescription>
        </Alert>
        <Alert variant="danger">
          <AlertTitle>Deployment failed</AlertTitle>
          <AlertDescription>Check the logs for details.</AlertDescription>
        </Alert>
      </div>
    </section>
  )
}
