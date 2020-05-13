import { Form } from 'antd';
import React from 'react';
import { Box, Flex } from 'UIKit/grid';
import { BottomButtons, FilterInputs, TextInputs, Upload } from './Blocks';

const NewsForm = ({
  sending,
  deleting,
  news,
  filters,
  onAddFile,
  onRemoveFile,
  onChangeField,
  onChangeFilter,
  onSaveNews,
  onDeleteNews
}) => {
  const [form] = Form.useForm();
  React.useEffect(() => {
    let fields = Object.assign(
      {},
      { ...news },
      {
        ...Object.assign({}, ...filters.map(x => ({ [x.type]: null })))
      },
      {
        ...(news && news.filters)
      }
    );

    form.setFieldsValue(fields);
  }, [news]);

  if (!news) {
    return (
      <Flex
        px="30px"
        width={[300, 450, 700, 900]}
        height="704px"
        alignItems="center"
      >
        {/* <Alert
              style={{
                width: '100%',
                height: '110px',
                // height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              message="Выберите новость"
              description="Создайте или выберите новость"
              type="info"
            /> */}
      </Flex>
    );
  }

  return (
    <Box px="30px" width={[300, 450, 700, 900]}>
      <Form
        style={{
          width: '100%'
        }}
        form={form}
        onFinish={() => {
          onSaveNews();
        }}
      >
        <TextInputs onChangeField={onChangeField} />
        <Upload onRemoveFile={onRemoveFile} onAddFile={onAddFile} news={news} />
        <FilterInputs filters={filters} onChangeFilter={onChangeFilter} />
        <BottomButtons
          onDeleteNews={onDeleteNews}
          sending={sending}
          deleting={deleting}
          news={news}
        />
      </Form>
    </Box>
  );
};

export default NewsForm;
