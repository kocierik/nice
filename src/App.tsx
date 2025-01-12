import { Tabs } from "@chakra-ui/react"
import { LuUser, LuFolder, LuSquareCheck } from "react-icons/lu"
import Zou from "./tabs/Zou"
import Tram from "./tabs/Tram"


function App() {
  return (
    <>
        <Tabs.Root key={"plain"}  defaultValue="members" variant={"outline"}>
          <Tabs.List flex={1}>
            <Tabs.Trigger value="tram" flex={1} justifyContent={"center"}>
              <LuFolder />
              Tram
            </Tabs.Trigger>
            <Tabs.Trigger value="zou" flex={1} justifyContent={"center"}>
              <LuUser />
              Zou
            </Tabs.Trigger>
            <Tabs.Trigger value="tasks" flex={1} justifyContent={"center"}>
              <LuSquareCheck />
              Settings
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="tram">
            <Tram/>
          </Tabs.Content>
          <Tabs.Content value="zou">
            <Zou/>
          </Tabs.Content>
          <Tabs.Content value="tasks">
            Manage your tasks for freelancers
          </Tabs.Content>
        </Tabs.Root>
    </>
  )
}

export default App
