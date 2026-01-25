import { cn } from "@/lib/utils";

function App() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className={cn("text-foreground text-4xl font-bold")}>Brilliance</h1>
        <p className="text-muted-foreground mt-4">
          Tailwind의 기본 유틸리티를 활용한 깔끔한 시작
        </p>
      </div>
    </div>
  );
}

export default App;
