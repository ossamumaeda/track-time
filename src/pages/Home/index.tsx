import { Play } from "phosphor-react";
import { CountDownButton, CountDownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput } from "./style";

export function Home(){
    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task"> Vou trabalhar em </label>
                    <TaskInput 
                        type="text" 
                        id="task" 
                        list="taskSugestion"
                    />

                    <datalist id="taskSugestion">
                        <option value="Projeto 1"/>
                        <option value="Projeto 2"/>
                        <option value="Projeto 3"/>
                    </datalist>

                    <label htmlFor="minutesAmount"> Durante </label>
                    <MinutesAmountInput 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00"
                        step={5}    
                        max={60}
                    />

                    <span> minutos.</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <CountDownButton type="submit">
                    <Play size={24}/>
                    Começar
                </CountDownButton>
            </form>
        </HomeContainer>
    )
}