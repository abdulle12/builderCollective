import { supabase } from "./lib/supabase";
import BuildersCollective from "./components/test";
function App() {

  console.log(supabase); // ✅ Put here
  return <BuildersCollective />;


}

export default App;
