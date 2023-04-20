<?php

namespace App\Http\Requests\UserTitle;

use App\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;

class InsertUserTitleRequest extends FormRequest
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
            'titleName' => ['required', 'string', 'unique:user_titles,title_name'],
            'titleAccess' => ['required', 'json'],
        ];
    }
}
