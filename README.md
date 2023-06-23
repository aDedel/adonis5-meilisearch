# Install MeiliSearch Provider in Adonis

## Install dependency

```bash
npm i @dedel.alex/adonis5-meilisearch
```

## Run command

```bash
node ace configure @dedel.alex/adonis5-meilisearch
```

### Configure MeiliSearch

```bash
# MeiliSearch HOST
MEILISEARCH_HOST=http://127.0.0.1:7700

# MeiliSearch API Key
MEILISEARCH_API_KEY="masterKey"

# MeiliSearch options
MEILISEARCH_OPTIONS=""
```

### Usage

Here is an example of how to use the MeiliSearch Provider:

```ts
import client from '@ioc:Adonis/Addons/MeiliSearch'

// Get index - where the documents are stored.
const index = client.index('movies')

const documents = [
    { id: 1, title: 'Carol', genres: ['Romance', 'Drama'] },
    { id: 2, title: 'Wonder Woman', genres: ['Action', 'Adventure'] },
    { id: 3, title: 'Life of Pi', genres: ['Adventure', 'Drama'] },
    { id: 4, title: 'Mad Max: Fury Road', genres: ['Adventure', 'Science Fiction'] },
    { id: 5, title: 'Moana', genres: ['Fantasy', 'Action']},
    { id: 6, title: 'Philadelphia', genres: ['Drama'] },
]

const response = await index.addDocuments(documents)

console.log(response) // => { "uid": 0 }

```

For more information about MeiliSearch, check the [offical website](https://www.meilisearch.com)

# Github project

https://github.com/aDedel/adonis5-meilisearch
