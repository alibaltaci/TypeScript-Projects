# TypeScript With React

# Adding TypeScript 

https://create-react-app.dev/docs/adding-typescript/

## Yeni Proje Başlatmak

Installation
To start a new Create React App project with TypeScript, you can run:

``npx create-react-app my-app --template typescript``

or

``yarn create react-app my-app --template typescript``

If you've previously installed ``create-react-app`` globally via ``npm install -g create-react-app``, we recommend you uninstall the package using ``npm uninstall -g create-react-app`` or ``yarn global remove create-react-app`` to ensure that npx always uses the latest version.

Global installs of ``create-react-app`` are no longer supported.`

## Var Olan Projeye TS Eklemek

To add TypeScript to an existing Create React App project, first install it:

``npm install --save typescript @types/node @types/react @types/react-dom @types/jest``

or

``yarn add typescript @types/node @types/react @types/react-dom @types/jest``

# .tsx ve .ts Uzantılı Dosyaların Farkı

.ts sadece JS kodu içeren dosyalarımızdır.

.jsx* Jsx kodları içeren dosyalarımızdır.

*JSX, birçok geliştiricinin aşina olduğu sözdizimini kullanarak bileşen oluşturmayı yapılandırmanın bir yolunu sağlayan JavaScript dil sözdiziminin bir React uzantısıdır. Görünüş olarak HTML'ye benzer.

# .d.ts Uzantılı Dosyalar

Tiplerin tanımlamalarının olduğu dosylardır.

# Props

```
export default function Hello( { name } ) {
  return (
    <div>
      <h1>Hello {name} </h1>
    </div>
  );
};
```

Fonksiyonumuza yukarıdaki gibi bir prop tanımlarsak aşağıdaki bir uyarı ile karşılaşırız.

```
(parameter) name: any
Binding element 'name' implicitly has an 'any' type.
```
Bu uyarıdan kurtulmak için prop 'a bir tip ataması yapmamız gerekir.

```
export default function Hello( { name }: {name: string} ) {
  return (
    <div>
      <h1>Hello {name} </h1>
    </div>
  );
};
```

## With Interface 

Birden fazla prop göndermek istediğimizde bunların tiplerini de tanımlamak zorunda oldğumuz için kodlarımız uzar ve güzel bir görüntü olmaz.

```
export default function Hello( { name, description, label }: {name: string, description: string, label: string} ) {
  return (
    <div>
      <h1>Hello {name} </h1>
    </div>
  );
};
```

Daha düzenli bir kod gösterimi için Interface 'i kullanabiliriz.

```
interface IHelloProps {
    name: string;
    description?: string;
    label?: string;
};

export default function Hello( { name, description, label }: IHelloProps ) {
  return (
    <div>
      <h1>Hello {name} </h1>
    </div>
  );
};
```

* Funksiyonumuzun da tipini belirtip daha genel kullanım aşağıdaki koda bakalım.

```
const Hello: React.FC<IHelloProps> = ( { name, description, label } ) => {
      return (
        <div>
          <h1>Hello {name} </h1>
        </div>
      )
    }

export default Hello;

```

Buradaki `` React.FC< > `` ile `` React.FunctionComponent < >`` aynı şeyi ifade etmektedir.

Funksiyona göndermek istediğimiz tüm Interface 'leri `` < > `` arasına girebiliriz.

## prop-types

TS Interface kullandığımız için React 'e olan ve hangi prop 'un hangi tipi alacağını söylediğimiz `` prop-types `` 'ı kullanmamıza gerek kalmadı.

TS bize farklı bir component içerisinde kullandığımız component 'in hangi propları alması gerektiğini bize otomatik olarak gösterir. 

## Function

Hello.tsx --> 

```
interface IHelloProps {
    name: string;
    description?: string;
    label?: string;
    onSmthHappen: (name: string) => void;
};

const Hello: React.FC<IHelloProps> = ( { name, description, label } ) => {
      return (
        <div>
          <h1>Hello {name} </h1>
          {onSmthHappen(name)}
        </div>
      )
    }

export default Hello;
```

App.tsx -->

```
function App() {
  return (
    <div className="App">
      Hello TypeScript With React 

      <Hello name = {"Ali"} onSmthHappen= {(name) => {console.log(name)}} />

    </div>
  );
}
```

## props default

```
const Hello: React.FC<IHelloProps> = ( { name, description="desc", label } ) => {
      return (
        <div>
          <h1>Hello {name} {description} </h1>
          {/* {onSmthHappen(name)} */}
        </div>
      )
    }
```

## import FC

```
import React, {FC} from 'react'
```

```
const Hello: FC<IHelloProps> = ( { name, description="desc", label } ) => {
      return (
        <div>
          <h1>Hello {name} {description} </h1>
          {/* {onSmthHappen(name)} */}
        </div>
      )
    }
```