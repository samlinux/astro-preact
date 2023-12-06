import { useState, useEffect } from 'preact/hooks';

// Definieren Sie die Struktur der Daten, die Sie von der API erhalten werden.
interface Data {
  id: number;
  name: string;
  email: string
}

export default function List() {
  const [data, setData] = useState<Array<Data> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {

    const fetchData = async () => {
      console.log('>> fetching data');
      setIsLoading(true);
      const response = await fetch('http://localhost:3000/data');
      const data:[] = await response.json();

      setData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>
         {data.map((item: Data) => (
            <div key={item.id}>
              {item.id} - {item.name} - {item.email}
            </div>
          ))}
        </div>
      ) : (
        <div>No data ?</div>
      )}
    </div>
  );
}