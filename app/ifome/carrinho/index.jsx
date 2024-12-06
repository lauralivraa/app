import React, { useContext } from "react";
import { FoodContext } from "../../../scripts/appContext";
import { Text, FlatList, View, StyleSheet } from "react-native";
import NavBar from "../../../components/NavBar";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Pressable } from "react-native";

const Cart = () => {
    const { menu, quantidadeCarrinho, totalPedido, alterarQuantidade } = useContext(FoodContext);

    return (
        <>
            <NavBar
                icon={<Entypo name="chevron-left" size={24} color="white" />}
                href={'/FoodDelivery'}
                titulo={'Carrinho'}
                cor={'#FF6F61'}
            />
            <View style={styles.container}>
                {quantidadeCarrinho === 0 ? (
                    <View style={styles.emptyCartContainer}>
                        <AntDesign name="shoppingcart" size={48} color="black" />
                        <Text style={styles.emptyText}>O Carrinho está vazio</Text>
                    </View>
                ) : null}
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={menu.filter(item => item.quantidade > 0)}
                        renderItem={({ item }) => (
                            <View style={styles.card}>
                                <View style={styles.info}>
                                    <View>
                                        <Text style={styles.title}>{item.nome}</Text>
                                        <Text style={styles.subtitle}>{item.fornecedor}</Text>
                                    </View>
                                    <View style={styles.align}>
                                        <Text style={styles.price}>R${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}</Text>
                                        <View style={styles.quantityContainer}>
                                            <Pressable onPress={() => alterarQuantidade(item.id, 'decrementar')}>
                                                <Entypo name="minus" size={20} color="#D9534F" />
                                            </Pressable>
                                            <Text style={styles.quantityBox}>{item.quantidade}</Text>
                                            <Pressable onPress={() => alterarQuantidade(item.id, 'incrementar')}>
                                                <Entypo name="plus" size={20} color="#D9534F" />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}
                    />
                </View>
                {quantidadeCarrinho !== 0 ? (
                    <View style={styles.orderContainer}>
                        <View>
                            <Text style={styles.orderTotalText}>Total do Pedido</Text>
                            <Text style={styles.orderTotal}>R${totalPedido.toFixed(2).replace('.', ',')}</Text>
                        </View>
                        <Pressable style={styles.finalizeButton}>
                            <Text style={styles.finalizeText}>Finalizar Compra</Text>
                        </Pressable>
                    </View>
                ) : null}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF9F6',
        marginVertical: 5,
    },
    emptyCartContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 56,
    },
    emptyText: {
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 22,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginVertical: 3,
        marginHorizontal: 16,
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    flatListContainer: {
        minHeight: '40vh',
        maxHeight: '40vh',
    },
    info: {
        justifyContent: 'space-around',
        gap: 20,
        flexDirection: 'row',
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        width: 200,
    },
    subtitle: {
        fontSize: 14,
        color: 'gray',
    },
    price: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#FF6F61',
    },
    align: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 3,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#D9534F',
        borderRadius: 8,
        borderWidth: 2,
        justifyContent: 'center',
        width: 90,
    },
    quantityBox: {
        fontSize: 16,
        fontWeight: '600',
        paddingHorizontal: 12,
        color: 'black',
        textAlign: 'center',
    },
    orderTotalText: {
        textAlign: 'center',
    },
    orderTotal: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FF6F61',
    },
    finalizeButton: {
        borderWidth: 2,
        borderRadius: 6,
        borderColor: '#FF6F61',
        paddingVertical: 8,
        width: 280,
    },
    finalizeText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FF6F61',
        fontWeight: '400',
    },
});

export default Cart;
