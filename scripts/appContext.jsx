import { createContext, useState, useEffect } from "react"

export const FoodContext = createContext()
export const AppProvider = ({children}) => {
    const [totalPedido, setTotalPedido] = useState(0)
    const [quantidadeCarrinho, setQuantidadeCarrinho] = useState(0)
    const [menu, setMenu] = useState([
        {
            id: '1',
            nome: 'Hambúrguer Vegano',
            fornecedor: 'Veggie Burgers',
            preco: 39.90,
            quantidade: 0,
            imagem: 'https://s2.glbimg.com/jqfaCA6V4Yb2xgU1JzPD200Kaxk=/smart/e.glbimg.com/og/ed/f/original/2018/07/20/matilda_vegano_wellington_nemeth_1.jpg',
            descricao: 'Hambúrguer vegano com grão-de-bico e legumes.'
        },
        {
            id: '2',
            nome: 'Sushi de Salmão',
            fornecedor: 'Sushi Place',
            preco: 45.50,
            quantidade: 0,
            imagem: 'https://img.lovepik.com/bg/20231228/sushi-with-salmon-on-leaves-with-black-background_2495650_wh860.png',
            descricao: 'Sushi com salmão fresco e arroz temperado.'
        },
        {
            id: '3',
            nome: 'Taco de Frango',
            fornecedor: 'Taco House',
            preco: 27.50,
            quantidade: 0,
            imagem: 'https://receitason.com/wp-content/uploads/2023/06/Tacos-de-frango-com-queijo-e-salada.jpg',
            descricao: 'Taco recheado com frango, guacamole e salsa.'
        },
        {
            id: '4',
            nome: 'Brigadeiro',
            fornecedor: 'Doces da Maria',
            preco: 3.50,
            quantidade: 0,
            imagem: 'https://harald.com.br/wp-content/uploads/2020/04/briadeirogormet-melken-700x520-1.jpg',
            descricao: 'Brigadeiro clássico, por unidade.'
        },
        {
            id: '5',
            nome: 'Açaí na Tigela',
            fornecedor: 'Açaí Mania',
            preco: 19.90,
            quantidade: 0,
            imagem: 'https://i.pinimg.com/originals/b3/e0/a5/b3e0a5678eccd90997a85adb6bbcbbfc.jpg',
            descricao: 'Açaí com granola e frutas.'
        },
        {
            id: '6',
            nome: 'Suco Natural',
            fornecedor: 'Bebidas Naturais',
            preco: 12.00,
            quantidade: 0,
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDHRPlbEVZUdjBgmSom4GO_js7lCyXHCaA9w&s',
            descricao: 'Suco natural de laranja fresco. 300ml.'
        },
        {
            id: '7',
            nome: 'Água Mineral',
            fornecedor: 'Água Pura',
            preco: 3.00,
            quantidade: 0,
            imagem: 'https://www.plastico.com.br/wp-content/uploads/2023/07/agua-mineral-iStock-866929570.jpg',
            descricao: 'Lata de água mineral. 500ml.'
        },
        {
            id: '8',
            nome: 'Refrigerante Limão',
            fornecedor: 'Bebidas do Carlos',
            preco: 4.50,
            quantidade: 0,
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmIc_AwAqXjwSP_RcPcRGKvi7bP2pt71zSA&s',
            descricao: 'Lata de refrigerante de limão. 500ml.'
        },
    ]);

    const alterarQuantidade = (id, tipo) => {
        setMenu(prevMenu => {
            const menuAtualizado = prevMenu.map(item => {
                if (item.id === id) {
                    const novaQuantidade = tipo === 'incrementar' ? item.quantidade + 1 : item.quantidade > 0 ? item.quantidade - 1 : 0;
                    return { ...item, quantidade: novaQuantidade };
                }
                return item;
            });
            const totalItens = menuAtualizado.reduce((total, item) => total + item.quantidade, 0);
            setQuantidadeCarrinho(totalItens);
            return menuAtualizado;
        });
    }
    
    const menuFiltrado = () => {
        const menuFiltrado = menu.filter(item => item.quantidade > 0)
        return menuFiltrado
    }

    useEffect(() => {
        const totalValor = menu.reduce((totalV, item) => totalV + (item.preco * item.quantidade), 0);
        setTotalPedido(totalValor);
    }, [menu]);

    return (
        <FoodContext.Provider value={{menu, setMenu, quantidadeCarrinho, setQuantidadeCarrinho, alterarQuantidade, menuFiltrado, totalPedido, setTotalPedido}}>
            {children}
        </FoodContext.Provider>
    )
}
