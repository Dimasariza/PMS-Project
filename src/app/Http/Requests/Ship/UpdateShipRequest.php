<?php

namespace App\Http\Requests\Ship;

use App\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;

class UpdateShipRequest extends FormRequest
{
    use FailedValidation;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'imo_number' => ['required', 'string', 'max:255'],
            'vesselName' => ['required', 'string', 'max:255'],
            'flag' => ['required', 'string', 'max:255'],
            'picture' => ['nullable', 'image', 'mimes:jpg,png,jpeg', 'max:1024'],
            'dwt' => ['required', 'int'],
            'grossTonage' => ['required', 'int'],
            'year' => ['nullable', 'int', 'min:1908'],
            'callsign' => ['required', 'string'],
            'LOA' => ['required', 'float'],
            'breadth' => ['required', 'float'],
            'vesselTypeGeneric' => ['required', 'string', 'max;255'],
            'vesselTypeDetailed' => ['required', 'string', 'max:255'],
        ];
    }
}
