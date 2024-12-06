import { Text, View, FlatList, Pressable, Image, StyleSheet } from "react-native";
import NavBar from "../../components/NavBar";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useContext } from "react";
import { Link } from "expo-router";
import { FoodContext } from "../../scripts/appContext";

const FoodDelivery = () => {
    const { menu, setMenu, quantidadeCarrinho, alterarQuantidade } = useContext(FoodContext);

    return (
        <>
            <NavBar
                icon={<Entypo name="home" size={24} color="white" />}
                href={'/'}
                titulo={'Food Delivery'}
                cor={'#FF6F61'}
            />
            <View style={styles.container}>
                <View style={styles.cartContainer}>
                    <Link href={'/ifome/carrinho'} style={styles.cartContainer}>
                        <AntDesign name="shoppingcart" size={24} color="#FF6F61" />
                        <Text style={{ marginLeft: 4 }}>{quantidadeCarrinho} itens</Text>
                    </Link>
                </View>
                <FlatList
                    data={menu}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Image
                                style={styles.image}
                                source={{ uri: item.imagem }}
                            />
                            <View style={styles.info}>
                                <View>
                                    <Text style={styles.title}>{item.nome}</Text>
                                    <Text style={styles.subtitle}>{item.fornecedor}</Text>
                                </View>
                                <Text style={styles.description}>{item.descricao}</Text>
                                <View style={styles.bottomInfo}>
                                    <Text style={styles.price}>R${item.preco.toFixed(2).replace('.', ',')} </Text>
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
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAF9F6',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        resizeMode: 'contain',
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFFFFF',
        marginVertical: 5,
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
        }
    },
    info: {
        width: 220,
        gap: 4,
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
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
    description: {
        fontSize: 12,
        minHeight: 28,
        fontWeight: '300',
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
    cartContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    bottomInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default FoodDelivery;
