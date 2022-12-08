import React from "react"
import "./Home.css"
import Card from "../../components/layout/Card/Card"

const Home = () => (
    <div className="page home">
        <h1>
            REACT HOOKS
        </h1>
        <div className="cards">
            <Card
                title="useState()"
                content="Retorna um valor e uma função para atualizar o valor" />
            <Card
                title="useEffect()"
                content="Por padão, os efeitos são execultados após cada 
                rederização concluida, mas você pode optar por dispará-las
                somente quando determinados valores receberam atualização." />
            <Card
                title="useContext()"
                content="Aceita um objeto de contexto (o valor retornado do
                React.createContext) e retorna o valor atual do contexto. O
                valor de contexto atual é determinado pela prop 'value' do
                <MyContext.Provider> mais próximo acima do componente de 
                chamada na árvore."/>
            <Card
                title="useReducer()"
                content="Uma alternativa para useState. Aceita um 
                'reduce' do tipo (state, action) => newState e retorna o 
                estado atual, junto com um método 'dispatch'." />
            <Card
                title="useCallback()"
                content="Recebe como argumentos, um callback e um array.
                useCallback() retornará uma versão memorizada do callback
                que só muda se uma das entradas tiverem sido alteradas." />
            <Card
                title="useMemo()"
                content="Recebeuma função create e um array com argumentos.
                O useMemo só recuperará o valor memorizado quando o array 
                receber um atualizção. Esta otimização ajuda a evitar 
                cálculos caros em cada renderização." />
            <Card
                title="useRef()"
                content="retorna um objeto 'ref' mutável, no qual a propriedade
                .current é inicializada para o argumento passado (initialValue).
                O objeto retornado persistirá durante todo o ciclo de vida do 
                componente." />
            <Card
                title="useImperativeHandler()"
                content="personaliza o valor da instância que está exposta aos
                components pai ao usar 'ref'. Como sempre, na maioria dos casos,
                seria bom evitar um código imperativo usando refs. O 
                'useImperativeHandler' deve ser usado com forwardRef" />
            <Card
                title="useLayoutEffect()"
                content="a assinatura é indêntica a useEffect, mas dispara
                sincronizadamente após todas as alterações no DOM. Use isto pra 
                ler o layout do DOM e renderizar sicronamente. Atualizações 
                agendadas dentro de useLayoutEffect serão liberadas de forma 
                síncrona, antes que o navegador tenha a chance de atualizar." />
            <Card
                title="useDebugValue()"
                content="pode ser usado para exibir um label em um custom hook 
                em React DevTools" />
        </div>
    </div>
)

export default Home