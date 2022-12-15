# proto - epochs
<a name="top"></a>

## Table of Contents

- [epochs/event.proto](#epochs_event-proto)
    - [EventEpochEnd](#nibiru-epochs-v1-EventEpochEnd)
    - [EventEpochStart](#nibiru-epochs-v1-EventEpochStart)
  
- [epochs/genesis.proto](#epochs_genesis-proto)
    - [GenesisState](#nibiru-epochs-v1beta1-GenesisState)
  
- [epochs/query.proto](#epochs_query-proto)
    - [QueryCurrentEpochRequest](#nibiru-epochs-v1beta1-QueryCurrentEpochRequest)
    - [QueryCurrentEpochResponse](#nibiru-epochs-v1beta1-QueryCurrentEpochResponse)
    - [QueryEpochsInfoRequest](#nibiru-epochs-v1beta1-QueryEpochsInfoRequest)
    - [QueryEpochsInfoResponse](#nibiru-epochs-v1beta1-QueryEpochsInfoResponse)
  
    - [Query](#nibiru-epochs-v1beta1-Query)
  
- [epochs/state.proto](#epochs_state-proto)
    - [EpochInfo](#nibiru-epochs-v1beta1-EpochInfo)
  
- [Scalar Value Types](#scalar-value-types)



<a name="epochs_event-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## epochs/event.proto



<a name="nibiru-epochs-v1-EventEpochEnd"></a>

### EventEpochEnd



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epoch_number | [uint64](#uint64) |  | Epoch number, starting from 1. |






<a name="nibiru-epochs-v1-EventEpochStart"></a>

### EventEpochStart



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epoch_number | [uint64](#uint64) |  | Epoch number, starting from 1. |
| epoch_start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The start timestamp of the epoch. |





 

 

 

 



<a name="epochs_genesis-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## epochs/genesis.proto



<a name="nibiru-epochs-v1beta1-GenesisState"></a>

### GenesisState
GenesisState defines the epochs module&#39;s genesis state.


| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epochs | [EpochInfo](#nibiru-epochs-v1beta1-EpochInfo) | repeated |  |





 

 

 

 



<a name="epochs_query-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## epochs/query.proto



<a name="nibiru-epochs-v1beta1-QueryCurrentEpochRequest"></a>

### QueryCurrentEpochRequest



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) |  |  |






<a name="nibiru-epochs-v1beta1-QueryCurrentEpochResponse"></a>

### QueryCurrentEpochResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| current_epoch | [uint64](#uint64) |  |  |






<a name="nibiru-epochs-v1beta1-QueryEpochsInfoRequest"></a>

### QueryEpochsInfoRequest







<a name="nibiru-epochs-v1beta1-QueryEpochsInfoResponse"></a>

### QueryEpochsInfoResponse



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| epochs | [EpochInfo](#nibiru-epochs-v1beta1-EpochInfo) | repeated |  |





 

 

 


<a name="nibiru-epochs-v1beta1-Query"></a>

### Query
Query defines the gRPC querier service.

| Method Name | Request Type | Response Type | Description |
| ----------- | ------------ | ------------- | ------------|
| EpochInfos | [QueryEpochsInfoRequest](#nibiru-epochs-v1beta1-QueryEpochsInfoRequest) | [QueryEpochsInfoResponse](#nibiru-epochs-v1beta1-QueryEpochsInfoResponse) | EpochInfos provide running epochInfos |
| CurrentEpoch | [QueryCurrentEpochRequest](#nibiru-epochs-v1beta1-QueryCurrentEpochRequest) | [QueryCurrentEpochResponse](#nibiru-epochs-v1beta1-QueryCurrentEpochResponse) | CurrentEpoch provide current epoch of specified identifier |

 



<a name="epochs_state-proto"></a>
<p align="right"><a href="#top">Top</a></p>

## epochs/state.proto



<a name="nibiru-epochs-v1beta1-EpochInfo"></a>

### EpochInfo



| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| identifier | [string](#string) |  | A string identifier for the epoch. e.g. &#34;15min&#34; or &#34;1hour&#34; |
| start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | When the epoch repetitino should start. |
| duration | [google.protobuf.Duration](#google-protobuf-Duration) |  | How long each epoch lasts for. |
| current_epoch | [uint64](#uint64) |  | The current epoch number, starting from 1. |
| current_epoch_start_time | [google.protobuf.Timestamp](#google-protobuf-Timestamp) |  | The start timestamp of the current epoch. |
| epoch_counting_started | [bool](#bool) |  | Whether or not this epoch has started. Set to true if current blocktime &gt;= start_time. |
| current_epoch_start_height | [int64](#int64) |  | The block height at which the current epoch started at. |





 

 

 

 



## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |

