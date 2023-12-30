export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 mt-14">
      <div className="text-black w-screen h-screen">
        <div class="flex flex-row justify-between">
          <div class="h-[500px] w-[400px] mt-0 ml-11 rounded flex justify-center p-2">
            <div className="flex flexrow w-[400px] h-[100px] text-center items-center justify-center rounded-lg">
              <h1 className="text-3xl text-white font-mono">
                {`<Welcome to Da Blog>`}
              </h1>
            </div>
          </div>
          <div class=" bg-red-300 h-[700px] w-[600px] rounded">
            Blog posts here
          </div>
          <div class=" bg-amber-300 h-[150px] w-[200px] mr-8 rounded">
            Categories
          </div>
        </div>
      </div>
    </main>
  );
}
