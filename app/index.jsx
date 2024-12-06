import { StyleSheet, Image, Text, View, FlatList } from "react-native";
import { Link } from "expo-router";

export default function SobreHome() {
  const data = [
    { id: '1', link: './pokemon', titulo: 'Pokemon' },
    { id: '2', link: './ifome', titulo: 'Ifome' },
    { id: '3', link: './singup', titulo: 'Taskhub' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sobre Mim</Text>
      </View>
      <View style={styles.body}>
        <Image 
          style={styles.profileImage}
          source={require('../assets/images/eu.png')}
        />
        <Text style={styles.welcomeText}>Laura Livramento Ramos</Text>
        <Text style={styles.descriptionText}>
          Meu nome é Laura, tenho 18 anos e eu amo treinar!
        </Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link style={styles.linkButton} href={item.link}>
              {item.titulo}
            </Link>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
  },

  header: {
    backgroundColor: '#1c1c1c',
    paddingVertical: 25,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },

  title: {
    fontSize: 36,
    fontWeight: '900',
    color: '#fff',
    textTransform: 'uppercase',
  },

  body: {
    flex: 1,
    width: '100%',
    maxWidth: 700,
    backgroundColor: '#121212',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },

  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 6,
    borderColor: '#1c1c1c',
  },

  welcomeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
  },

  descriptionText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#ddd',
    marginBottom: 30,
    lineHeight: 24,
  },

  linkButton: {
    backgroundColor: '#333',
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginVertical: 10,
    width: '90%',
    borderRadius: 25,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    textTransform: 'uppercase',
    elevation: 5,
  },

  linkButtonActive: {
    backgroundColor: '#555',
    elevation: 8,
  },
});
